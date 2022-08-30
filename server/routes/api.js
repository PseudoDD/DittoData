const express = require('express');
const dittoDataController = require('../controllers/dittoDataController');
const router = express.Router();
const session = require('express-session');
const passport = require('passport');

function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

router.post('/', dittoDataController.getSchemas, (req, res) =>
  res.status(200).json(res.locals.schemas)
);

router.post('/add', dittoDataController.addSchema, (req, res) =>
  res.status(200).json(res.locals.dummyData)
);

router.get(
  '/auth/google',
  // (req, res) => {
  //   res.status(200).redirect('https://www.google.com/');
  // }
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/protected',
    failureRedirect: '/auth/google/failure',
  })
);

router.get('/protected', isLoggedIn, (req, res) => {
  res.status(200).redirect(303, 'http://localhost:8080/#/');
  // res.status(200).redirect(303, '/');

  // res.status(200).json('status');
  console.log('redirected');
});

module.exports = router;
