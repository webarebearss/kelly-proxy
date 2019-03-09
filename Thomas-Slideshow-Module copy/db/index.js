
const knexConfig = require('../knexfile');
let env = 'development';
let knex = require('knex')(knexConfig[env]);

module.exports = knex;

knex.migrate.latest([knexConfig]);