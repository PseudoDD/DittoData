const express = require('express');
const dittoDataController = require('../controllers/dittoDataController');
const router = express.Router();

router.get('/', dittoDataController.addSchema, (req, res) =>
  res.status(200).json(res.locals.rows)
);



module.exports = router;
