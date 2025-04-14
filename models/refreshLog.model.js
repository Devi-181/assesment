module.exports = (sequelize,DataTypes) => {

const RefreshLog = sequelize.define('RefreshLog',{
    id: {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    status : {
        type : DataTypes.STRING
    },
    message : {
        type: DataTypes.TEXT
    },
    timeStamp : {
        type:DataTypes.DATE,
        defaultValue : DataTypes.NOW
    },
    paymentMethod : {
        type:DataTypes.STRING
    }
},
{
    timestamps:false,
    tableName : 'RefreshLog'
})
return RefreshLog;
}