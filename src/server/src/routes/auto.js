const express = require('express');
const router = express.Router();

const filter = require('../controller/filter');

// filter
router.get('/filter', filter.getFilter);
router.get('/mainfilter', filter.getMainFilter);

module.exports = router;
