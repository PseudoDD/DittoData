const express = require('express');

const router = express.Router();

router.get('/', starWarsController.getCharacters, (req, res) =>
  res.status(200).json(res.locals.rows)
);



module.exports = router;
