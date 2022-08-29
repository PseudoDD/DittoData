const db = require('../models/dittoDataModels.js');

const dittoDataController = {};

starWarsController.getSchemas = (req, res, next) => {
    const queryString = `SELECT * FROM planets WHERE planets._id=${req.query.id}`;
    db.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      // console.log(result.rows[0]);
      res.locals.planetDetails = result.rows[0];
      return next();
    });
  };

dittoDataController.addSchema = (req, res, next) => {
  const queryString = `
    INSERT INTO people(name, gender, species_id, birth_year, eye_color, skin_color, hair_color, mass, height, homeworld_id)
    VALUES('${req.body.name}',' ${req.body.gender}', '${req.body.species_id}', '${req.body.birth_year}', '${req.body.eye_color}', '${req.body.skin_color}', '${req.body.hair_color}', '${req.body.mass}', '${req.body.height}','${req.body.homeworld_id}') RETURNING *
  `;

  console.log(queryString);
  db.query(queryString, (err, result) => {
    if (err) {
      console.log(err, 'Caught add schema error');
      return next(err);
    }
    console.log('finished adding schema');
    return next();
  });
};

module.exports = dittoDataController;
