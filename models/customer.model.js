module.exports = (sequelize,DataTypes) => {

const Customer = sequelize.define('Customer',{
    customerId: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING
    },
    email : {
        type:DataTypes.STRING
    },
    address : {
        type:DataTypes.STRING
    }
},{
    timestamps:false,
    tableName : 'Customer'
})
return Customer;
};