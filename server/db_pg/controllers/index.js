const db = require('../index.js');

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


let getRecords = (cb) => {
  db.any(`SELECT * FROM checkout`)
    .then(res => cb(res))
    .catch(e => cb(e));
}


const deleteRecord = (data, cb) => {
  data = [data];
  var query = `DELETE from checkout where id = $1`;
  db.any(query, data)
    .then((res) => {
      console.log(`Deleted ${data} from table`);
      cb(null, res);
    })
    .catch(e => cb(e));
}

const alterRecord = (data, cb) => {
  var data = [data.checkin, data.checkout, data.id];
  var query = `update checkout set checkin = $1, checkout = $2 where id = $3`
  db.any(query, data)
    .then((res) => {
      console.log(`Altered record to ${JSON.stringify(data)}`);
      cb(null, res);
    })
    .catch(e => cb(e));
}
//
module.exports = {
  insertRecord,
  getRecords,
  deleteRecord,
  alterRecord
};