const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const db = require('./db')
const database = require('./db/checkout.js');
const app = express();
const port = process.env.PORT || 3002;
const cors = require('cors');

// Allow CORS
app.use(cors());

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Parse all requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Checkout dates
app.get('/checkout', (req, res) => {
  database.getRecords((results) => {
    res.send(results);
  });
});

// Checkout user
app.post('/checkout', (req, res) => {
  console.log(req.body, typeof req.body)
   database.insertRecord(req.body, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  });
});

// Deletes one record
app.delete('/checkout', (req, res) => {
  database.deleteRecord(req.body.id, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
})

// Updates one record
app.put('/checkout', (req, res) => {
  database.alterRecord(req.body, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
})

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
