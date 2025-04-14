module.exports = (sequelize,DataTypes) => {

const Product = sequelize.define('Product',{
    productId: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING
    },
    category : {
        type:DataTypes.STRING
    }
},
{
    timestamps:false,
    tableName : 'Product'
})
return Product;
}