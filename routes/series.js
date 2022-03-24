const express = require('express');
const router = express.Router();
const controller = require('../controllers/series');

router.get('/', controller.serieLijst);


module.exports = router;
