require('dotenv').config();

const knex = require('knex');
const knexConfig = require('./knexfile');

const environment = process.env.APP_ENV || 'development';
// console.log(knexConfig[environment]);
const connectionConfig = knexConfig[environment];

const connection = knex(connectionConfig);

connection.on('error', (error) => console.log(error));
connection.once('open', () => console.log('Database connected'));

module.exports = connection;
  