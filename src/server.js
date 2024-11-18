const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const cors = require('cors'); // Import cors
const PORT = 5010;
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

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