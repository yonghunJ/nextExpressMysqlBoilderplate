const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: 'admin',
    database: 'webT',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: 'admin',
    database: 'webT',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: 'admin',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};