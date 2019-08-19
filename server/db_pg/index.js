const { Client } = require('pg')
const client = new Client();
const Promise = require('bluebird');
const database = 'airbnb';

const db = Promise.promisifyAll(client);

db.connectAsync()
  .then(() => console.log('connected'))
  .catch(e => console.error('connection error', e.stack))