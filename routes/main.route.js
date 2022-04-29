const router = require('express').Router();

router
  .get('/', (req, res) => {
    if (req.session.isAuthorized) {
      isAuthorized = false;
    } else {
      isAuthorized = true;
    }
    res.render('main', { isAuthorized });
  });

module.exports = router;
