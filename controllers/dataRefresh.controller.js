const { refreshSalesData } = require('../services/dataRefreshService');

const triggerRefresh = async (req, res) => {
  const result = await refreshSalesData();
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result);
  }
};

module.exports = {
  triggerRefresh
};