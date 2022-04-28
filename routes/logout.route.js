const route = require('express').Router();

route
  .get('/', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect('/error');
      }
    });

    res.clearCookie(req.app.get('session cookie name'));
    return res.redirect('/');
  });

module.exports = route;
