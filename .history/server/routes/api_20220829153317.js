const express = require('express');
const dittoDataController = require('../controllers/dittoDataController');
const router = express.Router();

router.get('/', dittoDataController.getSchemas, (req, res) =>
  res.status(200).json(res.locals.rows)
);

router.post('/add', dittoDataController.addSchema, (req, res) =>
  res.status(200)
);


module.exports = router;
