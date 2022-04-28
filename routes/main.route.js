const router = require('express').Router();
const { get } = require('express/lib/response');
const { Bad_word, Good_word } = require('../db/models');

router.route('/')
  .get( (req, res) => {
    if (req.session.isAuthorized) {
      isAuthorized = false;
    } else {
      isAuthorized = true;
    }

    res.render('main', { isAuthorized })
  })
// закидываем в бд Good_word 

.post( async (req, res) => {
    const {word , count} = req.body;
    // try{
    //   const checkGood = await Good_word.findOne({
    //     where:{word}
    //   })
    // }

  })

module.exports = router;
