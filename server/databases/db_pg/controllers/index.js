const db = require('../index.js');

let insertRecord = (data, cb) => {
  var propData = [data.id, data.checkin, data.checkout];
  var query = `INSERT INTO checkout(propId, checkin, checkout) VALUES ($1, $2, $3) RETURNING *`;
  db.any(query, propData)
    .then(() => {
      var query = `SELECT * FROM checkout WHERE propId = ${data.id}`
      db.any(query)
      .then(res => cb(null, res))
      .catch(e => cb(e));
    })
    .catch((e) => {
      console.log(e);
      cb(e);
    })
}

let getRecordsByProp = (id, cb) => {
  db.any(`SELECT * FROM checkout WHERE propId = $1`, [id])
    .then(res => cb(null, res))
    .catch(e => cb(e));
}

const deleteRecord = (data, cb) => {
  data = [data.id, data.checkin, data.checkout];
  var query = `DELETE from checkout where propId = $1 AND checkin = $2 AND checkout = $3`;
  db.any(query, data)
    .then((res) => {
      console.log(`Deleted ${data} from table`);
      cb(null, res);
    })
    .catch(e => cb(e));
}

const alterRecord = (data, cb) => {
  var data = [data.id, data.oldCheckin, data.oldCheckout, data.checkin, data.checkout];
  var query = `update checkout set checkin = $4, checkout = $5 where propId = $1 AND checkin = $2 AND checkout = $3`
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
  getRecordsByProp,
  deleteRecord,
  alterRecord,
};