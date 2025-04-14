const loadCSV = require('../services/loadCSV');
const path = require('path');

const uploadCSV = async (req, res) => {
  try {

    const csvPath = path.join(__dirname, '../excel/data.csv');

    await loadCSV(csvPath);

    res.status(200).json({ message: 'CSV loaded successfully.' });
  } catch (error) {
    console.error('CSV Load Error:', error.message);
    res.status(500).json({ message: 'Failed to load CSV.', error: error.message });
  }
};

module.exports = { uploadCSV };