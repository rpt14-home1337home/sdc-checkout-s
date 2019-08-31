const db = require('../index.js');

let insertRecord = (data, cb) => {
  //check if records exist for date range
  getRecordsByDate(data, (err, records) => {
    if (err) {
      cb(err);
    } else if (records.length > 0) {
      err = new Error('Invalid date range: records exist within interval provided. ' + JSON.stringify(records) );
      cb(err);
    } else {
      //if no records exist, insert new record
      data = [data.id, data.checkin, data.checkout];
      var query = `INSERT INTO checkout(prop_id, checkin, checkout) VALUES ($1, $2, $3)`;
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

  })
}

let getRecordsByProp = (id, cb) => {
    db.any(`SELECT * FROM checkout WHERE propid = $1`, [id])
    .then(res => cb(null, res))
    .catch(e => cb(e));
}


const deleteRecord = (data, cb) => {
  data = [data.id, data.checkin, data.checkout];
  var query = `DELETE from checkout where propid = $1 AND checkin = $2 AND checkout = $3`;  db.any(query, data)
    .then((res) => {
      console.log(`Deleted ${data} from table`);
      cb(null, res);
    })
    .catch(e => cb(e));
}

const alterRecord = (data, cb) => {
  var data = [data.id, data.oldCheckin, data.oldCheckout, data.checkin, data.checkout];
  var query = `update checkout set checkin = $4, checkout = $5 where prop_id = $1 AND checkin = $2 AND checkout = $3`
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
  alterRecord
};