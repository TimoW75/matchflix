const express = require('express');
const router = express.Router();

// Voor elke foute pagina, link naar 404
router.get('/', (req, res) => {
    res.status(404).render('404');
  });


module.exports = router;