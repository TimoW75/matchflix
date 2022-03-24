const express = require("express");
const router = express.Router();
const controller = require("../controllers/series");



router.get('/', controller.series);
router.post('/', controller.seriesSubmit);

module.exports = router;