const express = require('express'); // Import the Express framework and assign it to the variable 'express'
const cors = require('cors'); // Import the CORS middleware and allows your backend to accept requests from other domains (e.g. frontend running on localhost:5173)

const app = express(); // 
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'o' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// const db = require('./firebase');
// db.ref('test').set({ alive: true });