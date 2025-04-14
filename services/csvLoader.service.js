const csv = require('fast-csv');
const fs = require('fs');

const {Customer,Order,Product,OrderItem} = require('../models');

const loadCSV = async (csvFilePath) => {
    try {
      const records = [];
  
      fs.createReadStream(path.resolve(csvFilePath))
        .pipe(csv({ skipEmptyLines: true }))
        .on('data', (row) => {
          records.push(row);
        })
        .on('end', async () => {
          console.log(`Loaded ${records.length} records from CSV`);
          for (const row of records) {
            try {
              // Parse data from row
              const {
                'Order ID': orderId,
                'Product ID': productId,
                'Customer ID': customerId,
                'Product Name': productName,
                Category,
                Region,
                'Date of Sale': dateOfSale,
                'Quantity Sold': quantitySold,
                'Unit Price': unitPrice,
                Discount,
                'Shipping Cost': shippingCost,
                'Payment Method': paymentMethod,
                'Customer Name': customerName,
                'Customer Email': customerEmail,
                'Customer Address': customerAddress
              } = row;
  
              // Create or find Customer
              const [customer] = await Customer.findOrCreate({
                where: { customerId },
                defaults: {
                  name: customerName,
                  email: customerEmail,
                  address: customerAddress,
                },
              });
  
              // Create or find Product
              const [product] = await Product.findOrCreate({
                where: { productId },
                defaults: {
                  name: productName,
                  category: Category,
                },
              });
  
              // Create or find Order
              const [order] = await Order.findOrCreate({
                where: { orderId },
                defaults: {
                  customerId: customer.id,
                  region: Region,
                  dateOfSale: new Date(dateOfSale),
                  paymentMethod,
                  shippingCost: parseFloat(shippingCost || 0),
                },
              });
  
              // Create OrderItem 
              await OrderItem.create({
                orderId: order.id,
                productId: product.id,
                quantity: parseInt(quantitySold),
                unitPrice: parseFloat(unitPrice),
                discount: parseFloat(Discount || 0),
              });
            } catch (err) {
              console.error('Error processing row:', row, err.message);
            }
          }
  
          console.log('CSV Load Completed.');
        });
    } catch (error) {
      console.error('Failed to load CSV:', error.message);
    }
  };
  
  module.exports = loadCSV;
