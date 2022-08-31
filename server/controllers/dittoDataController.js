const db = require('../models/dittoDataModels');
const { generateDummyData } = require('../services/randomizer.js');

const dittoDataController = {};

dittoDataController.getSchemas = (req, res, next) => {
  const queryString = `SELECT * FROM schemaTable WHERE user_id=${req.body.user_id}`;
  db.query(queryString, (err, result) => {
    if (err) {
      return next(err);
    }
    res.locals.schemas = result.rows;
    return next();
  });
};

dittoDataController.addSchema = (req, res, next) => {
  const queryString = `
    INSERT INTO schemaTable (schemaColumns, user_id)
    VALUES('${JSON.stringify(req.body.schemaColumns)}', ${req.body.user_id})
  `;

  const dummyDataResponse = generateDummyData(req.body.schemaColumns, 1000);

  db.query(queryString, (err) => {
    if (err) {
      return next(err);
    }
  });
  res.locals.dummyData = dummyDataResponse;
  return next();
};

dittoDataController.deleteSchema = (req, res, next) => {
  const schemaID = req.params.id;
  const queryString = `
    DELETE FROM schemaTable
    WHERE schema_id='${schemaID}'
  `;
  console.log('Delete query String: ', queryString);
  db.query(queryString, (err) => {
    if (err) {
      return next(err);
    }
  });

  return next();
};

module.exports = dittoDataController;
