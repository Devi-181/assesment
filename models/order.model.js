module.exports = (sequelize,DataTypes) => {

const Order = sequelize.define('Order',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    region : {
        type : DataTypes.STRING
    },
    dateofSale : {
        type: DataTypes.DATE
    },
    shippingCOst : {
        type:DataTypes.FLOAT
    },
    paymentMethod : {
        type:DataTypes.STRING
    }
},
{
    timestamps:false,
    tableName : 'Order'
})
return Order;
}