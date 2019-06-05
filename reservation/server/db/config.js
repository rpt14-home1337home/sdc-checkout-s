const Promise = require('bluebird');

module.exports = (db) => {
  db = Promise.promisifyAll(db);

  // Checkout table
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS checkout (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      checkin VARCHAR(255),
      checkout VARCHAR(255)
    );`)
    .error(err => {
      console.log(err);
    });
};
