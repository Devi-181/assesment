const {Sequelize,DataTypes} = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS,{
    host : process.env.DB_HOST,
    dialect :'mssql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Customer = require('./customer.model')(sequelize,DataTypes);
db.Product = require('./product.model')(sequelize,DataTypes);
db.Order = require('./order.model')(sequelize,DataTypes);
db.OrderItem = require('./orderItem.model')(sequelize,DataTypes);
db.RefreshLog = require('./refreshLog.model')(sequelize,DataTypes);


module.exports = db;
