require('dotenv').config();

const productData = require('./data/product');

const connectDb = require('./config/db');
const Product = require('./src/models/Product');

connectDb();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    console.log('Data Imported');
    process.exit();
  } catch (err) {
    console.log('Import Data to DB Failed', err);
    process.exit(1);
  }
};

importData();
