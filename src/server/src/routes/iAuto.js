const express = require('express');
const router = express.Router();

const filterService = require('../services/filter');
const autoService = require('../services/auto');

// GET filter
router.get('/filter', filterService.getFilter);
router.get('/mainfilter', filterService.getMainFilter);

// GET auto
// Here is post necesserry due to the many filter params!
router.post('/', autoService.getAuto);
router.get('/best', autoService.getBestAutos);

module.exports = router;
