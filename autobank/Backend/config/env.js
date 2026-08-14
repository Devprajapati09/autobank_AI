const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/autobank',
  JWT_SECRET: process.env.JWT_SECRET || 'autobank_super_secret_jwt_key_2026',
  JWT_EXPIRE: process.env.JWT_EXPIRE || '30d',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || ''
};
