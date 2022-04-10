const express = require("express");
const router = express.Router();
const controller = require('../controllers/login');

router.get('/', controller.loginRender);
router.post('/', controller.loginFunction);

module.exports = router;