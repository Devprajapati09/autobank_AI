const mongoose = require('mongoose');
const env = require('./env');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(env.MONGO_URI, {  // i have mongoose.connect(env.MONGO_URI) whixh is goes to the in the called the next step.
      serverSelectionTimeoutMS: 5000
    });

    console.log(`[Database] MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database] MongoDB connection failed: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

// .env
//   ↓
// MONGO_URI = mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/autobank?retryWrites=true&w=majority
//   ↓
// env.js
//   ↓
// env.MONGO_URI
//   ↓
// db.js
//   ↓
// mongoose.connect()
//   ↓
// MongoDB Atlas
