const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getdata, dbconnect, record, insertdata, updateRecord, createCollection } = require('./dbconn');

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Backend is working!');
});

// Define the register route using dbConn
app.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body; // Include 'role' in the request body
    
    let userData = { name, email, password, role };

    try {
        const result = await insertdata('users', userData);
        res.status(201).send({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).send({ error: 'Failed to register user' });
    }
});

// Endpoint to handle user login
app.post('/login', async (req, res) => {
    const { name, password, role } = req.body; // Include 'role' in the request body
    
    try {
        // Find user by name and role
        const user = await record('users', { name, role });
        
        // Check if user exists and compare passwords
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        
        if (user.password !== password) {
            return res.status(401).json({ error: 'Incorrect password' });
        }
        
        // If credentials are correct, return success message or token
        res.status(200).json({ message: 'Login successful' });
        
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed. Please try again.' });
    }
});
// Start the server
app.listen(8000, (err) => {
    if (err) throw err;
    dbconnect()
        .then(() => console.log('Database connected successfully'))
        .catch((error) => {
            console.error('Database connection error:', error);
            process.exit(1);
        });
    console.log('Server started on port 8000');
});
