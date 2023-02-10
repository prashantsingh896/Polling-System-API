const express = require('express');
const router = express.Router();
const controller = require('../controllers/homepage');

router.get('/',controller.homepage);
router.use('/questions',require('./question'));
router.use('/options',require('./option'));

module.exports = router;