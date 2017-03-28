const { DEV } = require('./config');
const knex = require('knex')(DEV);

// clear the console before each run
process.stdout.write('\033c');

//1: get all restaurants
// knex.select().from('restaurants').then(results => console.log(JSON.stringify(results, null, 2)));

//2: get Italin restaurants
// knex.select().from('restaurants').where('cuisine', 'Italian').then(results => console.log(JSON.stringify(results, null, 2)));

//3: get 10 Italian restaurants, subset of fields
// knex('restaurants').select('id', 'name').where('cuisine', 'Italian').limit(10).then(results => console.log(JSON.stringify(results, null, 2)));

//4: count of Thai restaurants
// knex('restaurants').count().where('cuisine', 'Thai').then(results => console.log(JSON.stringify(results, null, 2)));

//4.5: getting distinct to work
// knex('restaurants').countDistinct('cuisine').then(results => console.log(JSON.stringify(results, null, 2)));

//5: Count of restaurants
// knex('restaurants').count().then(results => console.log(JSON.stringify(results, null, 2)));

//6: count of THai restaurants in a zip code
// knex('restaurants').count().where('address_zipcode', 11372).andWhere('cuisine', 'Thai').then(results => console.log(JSON.stringify(results, null, 2)));
// knex('restaurants').count().where({'address_zipcode': 11372, 'cuisine': 'Thai'}).then(results => console.log(JSON.stringify(results, null, 2)));

//7: Italian restaurants in one of several zipcodes
knex.select('id', 'name')
  .from('restaurants')
  .where('cuisine', 'Italian')
  .whereIn('address_zipcode', [10012, 10013, 10014])
  .limit(5)
  .orderBy('name')
  .then(results => console.log(JSON.stringify(results, null, 2)));

// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })
