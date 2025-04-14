const revenueService = require('../services/revenue.service');

const getRevenue = async( req, res) =>{
    try{
        const {startDate, enddate, groupBy} = req.query;
        if(!startDate || !enddate){
            return res.status(400).json({error:" startDate  and endDate are required"})
        }

        const revenue = await revenueService.calculateRevenue({startDate, enddate, groupBy});

        res.json({
            success: true,
            revenue
        })
    }
    catch(error)
    {
        res.status(500).json({error: 'Internal server error'});
    }
};

module.exports = {
    getRevenue
}
