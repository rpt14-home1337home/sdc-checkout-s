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

module.exports.insertRecord = insertRecord;
module.exports.getRecords = getRecords;