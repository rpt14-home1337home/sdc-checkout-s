const db = require('./index.js');

const getRecords = (cb) => {
  db.query('SELECT * FROM checkout', function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

const insertRecord = (checkout, cb) => {
  // console.log("RECORD CHECKOUT " + checkout)
  db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
    if (err) {
      // console.log(err);
      cb(err);
    }
    // console.log(`Inserted record ${JSON.stringify(checkout)}`);
    cb(null, results);
  });
};

const alterRecord = (checkout, cb) => {
  //checkout object must have id prop
  console.log(checkoput);
  db.queryAsync(`UPDATE checkout SET checkin = ?, checkout = ? where id = ?`), checkout, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`Altered record to ${JSON.stringify(checkout)}`);
    cb();
  }
}
const deleteRecord = (id, cb) => {
  db.queryAsync(`DELETE from checkout where id = ?`), id, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Deleted record ${JSON.stringify(id)}`);
    cb();
  }
}

const deleteRecordsBatch = (startId, endId, cb) => {
  db.queryAsync('DELETE from checkout where id >= ? && id <= ?'), [startId, endId], (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Deleted records ${JSON.stringify(startId)} to ${JSON.stringify(endId)}`);
    cb();
  }
}

const deleteRecordsAll = (cb) => {
  db.queryAsync('TRUNCATE checkout', (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Deleted all records in airbnb`);
    cb();
  })
}
module.exports.insertRecord = insertRecord;
module.exports.getRecords = getRecords;
module.exports.deleteRecord = deleteRecord;
module.exports.deleteRecordsBatch = deleteRecordsBatch;
module.exports.deleteRecordsAll = deleteRecordsAll;
module.exports.alterRecord = alterRecord;