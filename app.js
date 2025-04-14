const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./models');
const revenueRoutes = require('./routes/revenue.routes');
const csvRoutes = require('./routes/revenue.routes');
const {connectToDB} = require('./config/config')
const cron = require('node-cron');
const { refreshSalesData } = require('./services/dataRefresh.service');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('dev'));

//Routes
app.use('/api', revenueRoutes);
app.use('/upload-csv',csvRoutes)

const PORT = process.env.PORT || 5000;
connectToDB();


// Schedule daily at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running scheduled data refresh...');
  await refreshSalesData();
});
app.listen(PORT,()=>{
    console.log(`Server started  on port ${PORT}`);
})

