const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const db = require('./db')
const database = require('./db/checkout.js');
const app = express();
const port = process.env.PORT || 3002;

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Parse all requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Checkout dates
app.get('/checkout', (req, res) => {
  database.getRecords((results) => {
    res.send(results);
  });
});

// Checkout user
app.post('/', (req, res) => {
  database.insertRecord(req.body, () => {
    res.end();
  });
});

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
