const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

async function testConnection() {
  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connection successful');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  } finally {
    mongoose.connection.close();
  }
}

testConnection();
