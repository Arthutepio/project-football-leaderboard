import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.MYSQLUSER || 'root', //DB_USER
  password: process.env.MYSQLPASSWORD || '123456', //DB_PASS
  database: process.env.MYSQLDATABASE || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.MYSQLHOST || 'localhost', //DB_HOST
  port: Number(process.env.MYSQLPORT) || 3002, //DB_PORT
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
