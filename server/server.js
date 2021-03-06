require('newrelic');

var cluster = require('cluster');

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length;
  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

} else {

  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require("body-parser");
  const path = require('path');
  const fs = require('fs');
  const db = require('./databases/db_pg/controllers/index.js');
  const app = express();
  const port = process.env.PORT || 3002;
  const cors = require('cors');



  // Allow CORS
  app.use(cors());

  // Log all 4xx and 5xx responses
  app.use(morgan('dev'));

  // Parse all requests
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));


  // Serve public folder
  app.use(express.static(path.join(__dirname, '../public')));
  app.use('/:id', express.static(path.join(__dirname, '../public')));

  // Get by property ID
  app.get('/checkout/prop/:id', (req, res) => {
    db.getRecordsByProp(path.basename(req.url), (err, results) => {
      if (err) {
        res.status(500).send();
      } else {
        res.send(results);
      }
    });
  });

  // Checkout user
  app.post('/checkout/book/:id', (req, res) => {
    req.body.id = path.basename(req.url);
    db.insertRecord(req.body, (err, results) => {
      err ? res.status(500).send(err) : res.status(200).send(results);
    });
  });

  // Deletes one record
  app.delete('/checkout/:id', (req, res) => {
    db.deleteRecord(req.body, (err, results) => {
      err ? res.status(500).send(err) : res.status(200).send(results);
    })
  })

  // Updates one record
  app.put('/checkout/:id', (req, res) => {
    db.alterRecord(req.body, (err, results) => {
      err ? res.status(500).send(err) : res.status(200).send(results);
    })
  })

  // Listen for requests
  app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  });

}