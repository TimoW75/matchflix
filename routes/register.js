const express = require("express");
const router = express.Router();
const controller = require("../controllers/register");

router.get('/', controller.registerRender);
router.post('/', controller.registerFunction);

module.exports = router;