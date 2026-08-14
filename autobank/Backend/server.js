const dotenv = require('dotenv');
dotenv.config();

const app = require('./app');
const connectDB = require('./config/db');
const env = require('./config/env');

const startServer = async () => {
  await connectDB();

  app.listen(env.PORT, () => {
    console.log(`
╔══════════════════════════════════════════════════╗
║           AutoBank AI Backend Server             ║
║     Running on: http://localhost:${env.PORT}            ║
║     Environment: ${env.NODE_ENV}                    ║
╚══════════════════════════════════════════════════╝
    `);
  });
};

startServer();
