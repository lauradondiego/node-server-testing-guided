const knex = require('knex');
const config = require('../knexfile.js');

const environment = process.env.DB_ENV || 'development';
// we are using this for testing to search for DB_ENV 

module.exports = knex(config[environment]);
