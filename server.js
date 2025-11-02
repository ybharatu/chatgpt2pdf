// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from assets/
app.use(express.static(path.join(__dirname, 'assets')));

// Home route
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to My Node App' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

