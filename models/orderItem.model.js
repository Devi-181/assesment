const { OrderItem } = require(".");

module.exports = (sequelize,DataTypes) => {

const oderItem = sequelize.define('oderItem',{
    orderItemId: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    orderId : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    productId : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    quantitySold : {
        type:DataTypes.INTEGER
    },
    unitPrice : {
        type:DataTypes.INTEGER
    },
    discount : {
        type:DataTypes.INTEGER
    }

},{
    timestamps:false,
    tableName : 'oderItem'
});

return OrderItem;
}