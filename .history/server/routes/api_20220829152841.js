const express = require('express');



const router = express.Router();

router.get('/', starWarsController.getCharacters, (req, res) =>
  res.status(200).json(res.locals.rows)
);

router.get('/species', starWarsController.getSpecies, (req, res) =>
  res.status(200).json(res.locals.speciesDetails)
);

router.get('/homeworld', starWarsController.getHomeworld, (req, res) =>
  res.status(200).json(res.locals.planetDetails)
);

router.get('/film', starWarsController.getFilm, (req, res) =>
  res.status(200).json()
);

router.post('/character', starWarsController.addCharacter, (req, res) =>
  res.status(200)
);

module.exports = router;
