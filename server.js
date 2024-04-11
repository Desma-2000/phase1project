const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Endpoint to handle new user sign-up
app.post('/signup', (req, res) => {
    const newUser = req.body; // Assuming new user data is sent in the request body

    // Read current data from db.json
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Error reading file' });
            return;
        }

        let users = JSON.parse(data);
        users.push(newUser); // Add the new user to the array

        // Write updated data back to db.json
        fs.writeFile('db.json', JSON.stringify(users, null, 2), 'utf8', err => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).json({ error: 'Error writing file' });
                return;
            }
            res.json({ message: 'New user added successfully' });
        });
    });
});