const { DEV } = require('./config');
const knex = require('knex')(DEV);

// clear the console before each run
process.stdout.write('\033c');

// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .then(results => console.log(results));

// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .where({ borough: 'Manhattan' })
//     .debug(true)
//     .then(results => console.log(JSON.stringify(results, null, 4)))
//     .catch( err => console.log( err ) );

// knex.select('id', 'name', 'cuisine', 'borough')
//     .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
//     .from('restaurants')
//     .limit(2)
//     .debug(true)
//     .then(results => console.log(JSON.stringify(results, null, 4)));

// SELECT restaurants.id, name cuisine, borough,
// grades.id, grade, date as "inspectionDate", score
// FROM restaurants
// INNER JOIN grades ON grades.restaurant_id = restaurants.id
// WHERE restaurants.id = 1
// ORDER BY date DESC LIMIT 1;

// knex.select('restaurants.id', 'name', 'cuisine', 'borough', 'grades.id', 'grade', 'date as inspectionDate', 'score')
//     .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
//     .from('restaurants')
//     .where('restaurants.id', 1)
//     .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
//     .orderBy('date', 'desc')
//     .limit(2)
//     .then(results => console.log(JSON.stringify(results, null, 4)));


// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })
