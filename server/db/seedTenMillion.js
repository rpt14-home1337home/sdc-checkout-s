const faker = require('faker');
const fs = require('fs');
const promise = require('bluebird');
const fsAsync = promise.promisifyAll(fs);
const path = require('path');
const output = path.join(__dirname, '/seedTenMillion.sql');

