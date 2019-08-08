const mysql = require('mysql');
const moment = require('moment');
const Promise = require('bluebird');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'airbnb'
});

const db = Promise.promisifyAll(connection);

const seedDatabase = () => {
  for (let i = 1; i < 101; i++) {
    const now = moment([moment().year(), moment().month(), 1]);
    startDate = now.add(i, 'month')
    endDate = startDate.add(Math.floor(Math.random() * 7), 'days');
    const checkout = {
      checkin: startDate,
      checkout: endDate
    }

    db.queryAsync(`INSERT INTO checkout SET ?`, checkout, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(`Inserted record ${JSON.stringify(checkout)}`);
    });
  }
};

db.connectAsync()
  .then(() => seedDatabase());

