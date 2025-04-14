const { Sequelize } = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(
   
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,{
        host : process.env.DB_HOST,
        dialect : 'mssql'
    }

)

const connectToDB = async() =>{
    try{
        await sequelize.authenticate();
        comsole.log("db connected");
    }
    catch(error){
        console.log("unable to conmnect to db", error);
    }
    
}

module.exports = {sequelize, connectToDB}
// const config = {
//     development : {
//         username : process.env.DB_USERNAME,
//         password :process.env.DB_PASSWORD,
//         database : 
//         dialect : process.env.DB_DIALECT || 'mssql',
//         port : process.env.DB_PORT ,
//         server : 'localhost',
//         dialectOptions : {
//             options : {
//                 encrypt : true,

//             },
            
//         },
//         logging : false
//     }
// }

//module.exports = config;