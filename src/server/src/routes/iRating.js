const express = require('express');
const router = express.Router();

const authService = require('../controller/authentication');
const ratingService = require('../controller/rating');

// GET all user ratings
router.get('/user/:id', authService.checkAuth, ratingService.getUserRating);

// GET all ecar ratings
router.get('/auto/:id', authService.checkAuth, ratingService.getAutoRating);

// SET rating for a ecar from by a specific user
router.post('/auto', authService.checkAuth, ratingService.getAutoRating);

module.exports = router;
