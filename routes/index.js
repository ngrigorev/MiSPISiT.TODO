const router = require('express').Router();
const main = require('./main');

router.get('/', main);

module.exports = router;