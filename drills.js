const { DEV } = require('./config');
const knex = require('knex')(DEV);

// clear the console before each run
process.stdout.write('\033c');

//1: get all restaurants
// knex.select().from('restaurants').then(results => console.log(JSON.stringify(results, null, 2)));

//2: get Italin restaurants
//knex.select().from('restaurants').where('cuisine', 'Italian').then(results => console.log(JSON.stringify(results, null, 2)));

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
// knex.select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .limit(5)
//   .orderBy('name')
//   .then(results => console.log(JSON.stringify(results, null, 2)));

//8: Create a restaurant
// knex.insert({
//   name: "Byte Café",
//   borough: "Brooklyn",
//   cuisine: "coffee",
//   address_building_number: '123',
//   address_street: 'Atlantic Avenue',
//   address_zipcode: '11231' 
// })
// .into("restaurants")
// .then(result => console.log(JSON.stringify(result, null, 2)));

// knex.select("*")
// .from('restaurants')
// .where('name', 'Byte Café')
// .then(result => console.log(JSON.stringify(result, null, 2)));

//9: Create a restaurant and return id and name
// knex
//   .insert({
//     name: "The Fishery",
//     borough: "Brooklyn",
//     cuisine: "Seafood",
//     address_building_number: '567',
//     address_street: 'Awesome Avenue',
//     address_zipcode: '11231' 
//   })
//   .returning(['id', 'name'])
//   .into('restaurants')
//   .then(result => console.log(result));

//10: Create three restaurants and return id and name
// knex
//   .insert([
//     {
//       name: "The Meat Station",
//       borough: "Brooklyn",
//       cuisine: "Vegetarian",
//       address_building_number: '634',
//       address_street: 'Flatbush Avenue',
//       address_zipcode: '11231' 
//     },
//      {
//       name: "Mumbai Burger",
//       borough: "Brooklyn",
//       cuisine: "Indian-American",
//       address_building_number: '241',
//       address_street: 'Awesome Avenue',
//       address_zipcode: '11231' 
//     },
//      {
//       name: "The Tomato",
//       borough: "Brooklyn",
//       cuisine: "Tomato",
//       address_building_number: '356',
//       address_street: 'Awesome Avenue',
//       address_zipcode: '11231' 
//     }
//   ])
//   .returning(['id', 'name'])
//   .into('restaurants')
//   .then(result => console.log(result));

//11: Update a record
// knex
//   .update('name', 'Our Awesome Restaurant and Pub')
//   .where('nyc_restaurant_id', '30191841')
//   .into('restaurants')
//   .then(record => console.log(JSON.stringify(record, null, 2)));

// knex
//   .select('*')
//   .from('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .then(record => console.log(JSON.stringify(record, null, 2)));

//12: Delete by id
// knex 
//   .del()
//   .where('id', '15')
//   .from('grades')
//   .then(res => console.log(JSON.stringify(res, null, 2)));

//13: A blocked delete 
// skip

//14: Create a table
// knex.schema.createTable('inspectors', function(table) {
//   table.text('first_name').notNullable();
//   table.text('last_name').notNullable();
//   table.specificType('borough', 'borough_options');
// }) 
// .then(res => console.log(JSON.stringify(res, null, 2)));

//15: Update grades table
// knex.schema.table('grades', function(table) {
//   table.text('notes');
// });

//16: Drop the table 
knex.schema
.dropTable('inspectors')
.then(res => console.log(res));

// Destroy the connection pool
knex.destroy().then(() => { console.log('closed') })
