const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3002;

// Log all 4xx and 5xx responses
app.use(morgan('dev'));

// Log all requests to access.log
app.use(morgan('common', {
  stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
}));

// Serve public folder
app.use(express.static(path.join(__dirname, '../public')));

// Listen for requests
app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
