const express = require('express');
const dittoDataController = require('../controllers/dittoDataController');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');

router.post('/', dittoDataController.getSchemas, (req, res) =>
  res.status(200).json(res.locals.schemas)
);

router.post('/add', dittoDataController.addSchema, (req, res) =>
  res.status(200).json(res.locals.dummyData)
);

module.exports = router;
