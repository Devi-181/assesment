const express = require('express');
const router = express.Router();
const revenueController = require('../controllers/revenue.controller');
const csvController = require('../controllers/csv.controller');

router.get('/revenue/:startDate/:enddate/:groupBy',revenueController.getRevenue);
router.post('/upload-csv',csvController.uploadCSV);

module.exports = router;