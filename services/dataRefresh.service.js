const csvLoader = require('./csvLoader.service'); 
const logRefreshStatus = require('../utils/refershLogger');

const refreshSalesData = async () => {
  try {
    await csvLoader(); 
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