const db = require('../index.js');
const checkout = require('../models/checkout.js')

//run once to connect
const initialize = () => {
  db.any(checkout())
    .then(() => {
      console.log('Checkout Table initialized');
    })
    .catch(e => {throw new Error(e)})
};


initialize();

