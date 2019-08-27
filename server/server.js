const express = require('express');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const db_msql = require('./db/checkout.js');
const db_pg = require('./db_pg/controllers/index.js');
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

// Get by property ID
app.get('/checkout/prop', (req, res) => {
  let id = req.body.id;
  db_pg.getRecordsByProp(id, (err, results) => {
    if (err) {
      throw new Error(err)
    } else {
      res.send(results);
    }
  });
});

app.get('/checkout/date', (req, res) => {
  db_pg.getRecordsByDate(req.body, (err, results) => {
    if (err) {
      throw new Error(err)
    } else {
      res.send(results);
    }
  });
});

// Checkout user
app.post('/checkout', (req, res) => {
   db_pg.insertRecord(req.body, (err, results) => {
     console.log(err);
    err ? res.status(500).send(err) : res.status(200).send(results);
  });
});

// Deletes one record
app.delete('/checkout', (req, res) => {
  db_pg.deleteRecord(req.body.id, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
})

// Updates one record
app.put('/checkout', (req, res) => {
  db_pg.alterRecord(req.body, (err, results) => {
    err ? res.status(500).send(err) : res.status(200).send(results);
  })
})

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
