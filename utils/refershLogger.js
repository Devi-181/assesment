const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/data-refresh.log');

const logRefreshStatus = (status, message) => {
  const timestamp = new Date().toISOString();
  const logEntry = [`${timestamp}] ${status.toUpperCase()}: ${message}`];

  fs.appendFileSync(logFilePath, logEntry);
};

module.exports = logRefreshStatus;