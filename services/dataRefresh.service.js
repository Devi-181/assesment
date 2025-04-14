const csvLoader = require('./csvLoader'); // your loadCsv logic here
const logRefreshStatus = require('../utils/refreshLogger');

const refreshSalesData = async () => {
  try {
    await csvLoader(); // your CSV loading logic should handle duplicates and updates
    logRefreshStatus('success', 'Sales data refreshed successfully.');
    return { success: true, message: 'Sales data refreshed successfully.' };
  } catch (err) {
    console.error('Data refresh failed:', err);
    logRefreshStatus('failure', `Data refresh failed: ${err.message}`);
    return { success: false, message: err.message };
  }
};

module.exports = {
  refreshSalesData
};