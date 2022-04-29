const router = require("express").Router();
const res = require("express/lib/response");
// const { get } = require('express/lib/response');
const { Bad_word, Good_word } = require("../db/models");
// KFKFKFKFKFKFKF

router
  .route("/")
  .get((req, res) => {
    if (req.session.isAuthorized) {
      isAuthorized = false;
    } else {
      isAuthorized = true;
    }
    res.render("main", { isAuthorized });
  })

  // закидываем в бд Good_word и плохое слово тоже

  router.post(async (req, res) => {
    const { goodWord, count, badWord } = req.body;
    const thisWordGood = await Good_word.findOne({ where: { word: goodWord } });
    const thisWordBad = await Bad_word.findOne({ where: { word: badWord } });

    if (thisWordGood) {
      thisWordGood.count += 1;
      thisWordGood.save();
    } else {
      await Good_word.create({
        word: goodWord,
        count: 1,
        user_id: req.session.sid,
      });
    }
    if (!thisWordBad) {
      await Bad_word.create({
        word: badWord,
        user_id: req.session.sid,
      });
    }
  });

module.exports = router;
