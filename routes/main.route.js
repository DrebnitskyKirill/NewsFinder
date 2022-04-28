const router = require("express").Router();
const res = require("express/lib/response");
const { get } = require("express/lib/response");
const { Bad_word, Good_word } = require("../db/models");

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

  .post(async (req, res) => {
    const { goodWord, count, badWord } = req.body;
    const thisWord = await Good_word.findOne({ where: { word: goodWord } });
    
    if (thisWord) {
      const allGood = (await Good_word.findAll({ raw: true })).pop().count
      const x = allGood+1
      const wordGood = await Good_word.create({
        word: goodWord,
        count:x,
        user_id: req.session.sid,
      });
      

      const wordBAd = await Bad_word.create({
        word: badWord,
        user_id: req.session.sid,
      });
    } else{
      const wordGood = await Good_word.create({
        word: goodWord,
        count:1,
        user_id: req.session.sid,
      });
      
    }
  });
// .get((req, res) => {
//   res.render('main')
// })

module.exports = router;
