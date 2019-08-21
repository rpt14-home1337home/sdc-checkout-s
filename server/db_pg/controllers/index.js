const db = require('../index.js');

// const insertRecord = (checkout, cb) => {
//   // console.log("RECORD CHECKOUT " + checkout)
//   db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
//     if (err) {
//       // console.log(err);
//       cb(err);
//     }
//     // console.log(`Inserted record ${JSON.stringify(checkout)}`);
//     cb(null, results);
//   });
// };

let insertRecord = (data, cb) => {
  data = [data.checkin, data.checkout];
  var query = `INSERT INTO checkout(checkin, checkout) VALUES ($1, $2)`;
  db.any(query, data)
    .then((res) => {
      console.log(`Inserted ${data} into table`);
      cb(null, res);
    })
    .catch((e) => {
      console.log(e);
      cb(e);
    })
}

module.exports = {insertRecord};