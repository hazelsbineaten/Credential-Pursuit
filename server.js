const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;


// Start page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'start.html'));
});

// Serve static files (JS, CSS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Game page
app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Congratulations page
app.get('/congrats.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'congrats.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
