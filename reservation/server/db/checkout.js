const db = require('./index.js');

// db.queryAsync();

const insertRecord = (checkout, cb) => {
  db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
    if (err) {
      console.log(err);
    }
    console.log(`Inserted record ${JSON.stringify(checkout)}`);
  });
};

module.exports.insertRecord = insertRecord;