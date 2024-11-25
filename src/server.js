const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer'); // Import multer
const cors = require('cors'); // Import cors
const path = require('path');

const app = express();
const PORT = 5010;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Set up storage for multer to save files locally in an "uploads" directory
const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadDir = 'uploads';
            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir); // Create the directory if it doesn't exist
            }
            cb(null, uploadDir);
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname); // Add timestamp to prevent name conflicts
        },
    }),
});

// Endpoint to handle file uploads
app.post('/upload', upload.array('files'), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files uploaded' });
    }

    res.status(200).json({
        message: 'Files uploaded successfully',
        files: req.files.map((file) => ({
            originalName: file.originalname,
            savedPath: file.path,
        })),
    });
});


// Endpoint to list all uploaded files
app.get('/files', (req, res) => {
    const uploadDir = path.join(__dirname, 'uploads');
    fs.readdir(uploadDir, (err, files) => {
        if (err) {
            console.error("Error reading upload directory:", err);
            return res.status(500).json({ message: 'Failed to retrieve files' });
        }

        // Send the list of files as a JSON response
        res.status(200).json({
            files: files.map((file) => ({
                name: file,
                url: `http://localhost:${PORT}/uploads/${file}`,
            })),
        });
    });
});



// Endpoint to read the hyperlink from deliverables.txt
app.get('/deliverables-link', (req, res) => {
    const filePath = path.join(__dirname, 'deliverables.txt');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading deliverables.txt:', err);
            return res.status(500).json({ message: 'Failed to read deliverables.txt' });
        }
        res.status(200).json({ link: data.trim() }); // Send the hyperlink as a JSON response
    });
});


// Serve files in the "deliverables" directory
app.use('/deliverables', express.static(path.join(__dirname, 'deliverables')));


// Serve uploaded files for testing or debugging (optional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Load user data from JSON file
const loadUserData = () => {
    try {
        const data = fs.readFileSync('users.json');
        return JSON.parse(data).users;
    } catch (error) {
        console.error("Error loading user data:", error);
        return [];
    }
};

const saveUserData = (users) => {
    try {
        fs.writeFileSync('users.json', JSON.stringify({ users }, null, 2));
    } catch (error) {
        console.error("Error saving user data:", error);
    }
};

// Register endpoint
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const users = loadUserData();

    if (users.some(user => user.username === username)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    users.push({ username, password });
    saveUserData(users);
    res.json({ message: 'Registration successful' });
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = loadUserData();
    console.log("Received login request:", { username, password });
    console.log("Current users:", users);

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(400).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});