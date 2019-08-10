const db = require('./index.js');

const getRecords = (cb) => {
  db.query('SELECT * FROM checkout', function (err, results) {
    if (err) throw err;
    cb(results);
  });
};

const insertRecord = (checkout, cb) => {
  db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Inserted record ${JSON.stringify(checkout)}`);
    cb();
  });
};

const alterRecord = (checkout, cb) => {
  //checkout object must have id prop
  db.queryAsync(`UPDATE checkout SET checkin = ?, checkout = ? where id = ?`), checkout, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(`Altered record to ${JSON.stringify(checkout)}`);
    cb();
  }
}
const deleteRecord = (id, cb) => {
  db.queryAsync(`DELETE from airbnb where id = ?`), id, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Deleted record ${JSON.stringify(id)}`);
    cb();
  }
}

const deleteRecordsBatch = (startId, endId, cb) => {
  db.queryAsync('DELETE from airbnb where id >= ? && id <= ?'), [startId, endId], (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Deleted records ${JSON.stringify(startId)} to ${JSON.stringify(endId)}`);
    cb();
  }
}

const deleteRecordsAll = (cb) => {
  db.queryAsync('TRUNCATE airbnb', (err, results) => {
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