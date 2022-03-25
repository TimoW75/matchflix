const express = require("express");
const router = express.Router();
const controller = require('../controllers/update');



router.get('/', controller.update);
router.post('/', controller.gewijzigd);

module.exports = router; 