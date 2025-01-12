const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve the start page at the root URL "/"
app.get('/', (req, res) => {
    console.log('Serving start.html for root URL');
    res.sendFile(path.join(__dirname, 'public', 'start.html'));
});

// Serve static files (JS, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the game page for "/game"
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
