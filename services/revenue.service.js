const db = require('../models');
const {Op} = require('sequelize');

const calculateRevenue = async ({ startDate, enddate, griupBy}) => {
    const include = [
        {
            model : db.OrderItem,
            include : [db.Product]
        }
    ];
    const orders = await db.orders.findAll({
        where :{
            dateofSale : {
                [Op.between] : [startDate, enddate]
            }
        },
        include
    });

    const revenueMap = {};

    orders.forEach(order => {
        order.OrderItems.forEach(item =>{
            const baseRevenue = item.qualitySold * item.unitPrice * (1 - item.discount);
            let key = 'total';
            if(groupBy === 'product'){
                key = item.productId;
            }
            if(groupBy === 'category'){
                key = item.Product?.category;
            }
            if(groupBy === 'region'){
                key = order.region;
            }
            if(!revenueMap[key]){
                revenueMap[key] = 0;
            }
            revenueMap[key] += baseRevenue;
        })
    });
    return revenueMap;
}

module.exports = {
    calculateRevenue
}