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
  var checkinDate = Date.august().first().monday();
  var checkoutDate = Date.august().first().monday().addDays(getRandomNum());
  if (q === 2) {
    checkinDate = Date.august().second().monday();
    checkoutDate = Date.august().second().monday().addDays(getRandomNum());
  } else if (q === 3) {
    checkinDate = Date.august().third().monday();
    checkoutDate = Date.august().third().monday().addDays(getRandomNum());
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


