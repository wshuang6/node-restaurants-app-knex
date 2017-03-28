const { DEV } = require('./config');
const knex = require('knex')(DEV);

// clear the console before each run
process.stdout.write('\033c');


// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })
