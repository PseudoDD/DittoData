const db = require('../models/starWarsModels');

const dittoDataController = {};

dittoDataController.addSchema = (req, res, next) => {

*/
  const queryString = `
    INSERT INTO people(name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
    VALUES('${req.body.name}',' ${req.body.gender}', '${req.body.species_id}', '${req.body.birth_year}', '${req.body.eye_color}', '${req.body.skin_color}', '${req.body.hair_color}', '${req.body.mass}', '${req.body.height}','${req.body.homeworld_id}') RETURNING *
  `;
  // VALUES(${req.body.name}, ${req.body.gender}, ${req.body.species}, ${req.body.species_id}, ${req.body.birth_year}, ${req.body.eye_color}, ${req.body.skin_color}, ${req.body.hair_color}, ${req.body.mass}, ${req.body.height}, ${req.body.homeworld}, ${req.body.homeworld_id}, ${req.body.films}) RETURNING *

  console.log(queryString);
  db.query(queryString, (err, result) => {
    if (err) {
      console.log(err, 'Caught add character error');
      return next(err);
    }
    console.log('finished Adding Character');
    return next();
  });
};

module.exports = starWarsController;
