const moment = require('moment');
const Promise = require('bluebird');
const db = require('./index.js')

const seedDatabase = () => {
  for (let i = 1; i < 100; i++) {
    const now = moment([moment().year(), moment().month(), 1]);
    startDate = now.add(i, 'month')
    endDate = startDate.add(Math.floor(Math.random() * 7), 'days');
    const values = [startDate, endDate];

    const query = `INSERT INTO checkout(checkin, checkout) VALUES($1, $2) RETURNING *`;

    db.queryAsync(query, values, (err, results) => {
      if (err) {
        console.log(err);
      }
      console.log(`Inserted record ${JSON.stringify(query)}`);
    });
  }
};

seedDatabase();

