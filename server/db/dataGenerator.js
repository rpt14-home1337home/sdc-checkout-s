const fs = require('fs');
const csvWriter = require('csv-write-stream')
const output = 'seedData7.csv';
require('datejs');


const makeObj = (propId, checkin, checkout) => {
  return {
    propId,
    checkin,
    checkout
  }
}

const getRandomNum = () => {
  return Math.floor(Math.random() * 6) + 1;
}

const getDates= q => {
  var checkinDate = Date.august().first().monday().toString("yyyy/M/d");
  var checkoutDate = Date.august().first().monday().addDays(getRandomNum()).toString("yyyy/M/d");
  if (q === 2) {
    checkinDate = Date.august().second().monday().toString("yyyy/M/d");
    checkoutDate = Date.august().second().monday().addDays(getRandomNum()).toString("yyyy/M/d");
  } else if (q === 3) {
    checkinDate = Date.august().third().monday().toString("yyyy/M/d");
    checkoutDate = Date.august().third().monday().addDays(getRandomNum()).toString("yyyy/M/d");
  }
  return [checkinDate, checkoutDate];
}

const makeData = () => {
  var data = [];
  for (var i = 1; i < 100; i++) {
    for (var q = 1; q < 4; q++) {
      var dates = getDates(q);
      data.push(makeObj(i, dates[0], dates[1]));
    }
  }
  return data;
}

var data = makeData();
var headers = ["propId", "checkin", "checkout"];
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


