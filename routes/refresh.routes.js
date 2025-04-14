const express = require('express');
const router = express.Router();
const { triggerRefresh } = require('../controllers/dataRefreshController');

router.post('/refresh-data', triggerRefresh);

module.exports = router;