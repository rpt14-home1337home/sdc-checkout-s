const promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const csvWriter = require('csv-write-stream')
const output = 'seedData4.csv';
require('datejs');


const makeObj = (checkin, checkout) => {
  return {
    checkin,
    checkout
  }
}

const makeNegative = (val) => {
  return val - val - val;
}

const makeData = (start, end) => {
  var data = [];
  var q = end - 1;
  for (var i = end; i > start;) {
    i -= 2;
    q -= 2;
    var negI = makeNegative(i);
    var negQ = makeNegative(q);
    var obj = makeObj(Date.today().addDays(negI), Date.today().addDays(negQ));
    data.push(obj);
  }
  return data;
}

var data = makeData(1, 20000000);
var headers = ["checkin", "checkout"];
const writeData = (headers, data, output) => {
  var writer = csvWriter({ headers })
  writer.pipe(fs.createWriteStream(output))
  for (var obj of data) {
      writer.write(obj);
    }
  console.log(`Wrote ${data.length} records to ${output}`);
  writer.end()
}

writeData(headers, data, output);


