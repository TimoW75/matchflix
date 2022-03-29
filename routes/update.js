const express = require("express");
const router = express.Router();
const controller = require('../controllers/update');



router.get('/', controller.update);
router.post('/', controller.gewijzigd);


// --
// router.get('/update', (req, res) => {
//     session = req.session;
//     if (!session.gebruikersnaam) {
//       res.redirect('/');
//     } else {
//       res.render('update');
//     }
//   });
// --

module.exports = router; 