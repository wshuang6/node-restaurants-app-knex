const express = require('express');
const bodyParser = require('body-parser');

const { DEV } = require('./config');
const knex = require('knex')(DEV);

const app = express();
app.use(bodyParser.json());

app.get('/restaurants', (req, res) => {

  knex.select('id', 'name', 'cuisine', 'borough')
    .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
    .from('restaurants')
    .limit(10)
    .then(results => res.json(results));
});

app.get('/restaurants/:id', (req, res) => { 
  knex.select('restaurants.id as restaurantsid', 'name', 'cuisine', 'borough', 'grades.id as gradesid', 'grade', 'date as inspectionDate', 'score')
    .select(knex.raw("CONCAT(address_building_number, ' ', address_street, ' ', address_zipcode ) as address"))
    .from('restaurants')
    .where('restaurants.id', req.params.id)
    .innerJoin('grades', 'restaurants.id', 'grades.restaurant_id')    
    .orderBy('date', 'desc')
    .then(function(results) {
      // const hydrated = {};
      // results.forEach(function (obj) {
      //   if (!(obj.restaurantsid in hydrated)) {
      //     hydrated[obj.restaurantsid] = {
      //       name: obj.name,
      //       cuisine: obj.cuisine,
      //       borough: obj.borough,
      //       restaurantsid: obj.restaurantsid,
      //       address: obj.address,
      //       grades: []
      //     }
      //   }
      //   hydrated[obj.restaurantsid].grades.push({
      //     gradesid: obj.gradesid,
      //     grade: obj.grade, 
      //     inspectionDate: obj.inspectionDate,
      //     score: obj.score
      //   })
      // });
      // return res.status(200).json(hydrated);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({message: err.stack});
    })
});

app.post('/restaurants', (req, res) => {
  const reqbody = req.body;
  const restrant = {
    name: reqbody.name,
    cuisine: reqbody.cuisine,
    borough: reqbody.borough
  };
  knex.insert(restrant)
    .into('restaurants')
    .returning('id')
    .then(id => {
      let _grades = [];
      reqbody.grades.forEach(function (gradez) {_grades.push({
        grade: gradez.grades,
        score: gradez.score,
        // restaurant_id: id
        //restaurant_id integer REFERENCES users,
      })})
      knex.insert(_grades)
        .into('grades')
        .then();
    })
  req.body.name
  req.body.cuisine
  req.body.borough
  var blah = [];

})
app.listen(process.env.PORT || 8080);