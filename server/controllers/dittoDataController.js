const db = require('../models/dittoDataModels');

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
  console.log('queryString: ', queryString);

  db.query(queryString, (err, result) => {
    if (err) {
      return next(err);
    }
    console.log('result: ', result.rows);
    res.locals.schemas = result.rows;
    return next();
  });
};

module.exports = dittoDataController;
