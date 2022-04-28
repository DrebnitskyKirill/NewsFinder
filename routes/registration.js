const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const middleWare = require("../middleware/autoChecker");

router
  .route("/")
  .get(middleWare, (req, res) => {
    res.render("registration");
  })
  .post(async (req, res) => {
    // регистрация, получаем email, password из формы
    const { name, email, password } = req.body;
    console.log(req.body);

    // Проверяем, что пользователя с таким email нет в БД
    const user = await User.findOne({ where: { email } });

    if (user) {
      res.send("Такой пользователь уже есть!");
    } else {
      // создаём нового пользователя
      const newUser = await User.create({
        name,
        email,
        // хешируем пароль (нельзя хранить пароли в БД в открытом виде)
        password: await bcrypt.hash(password, 10),
      });

      // сразу же авторизируем пользователя (кладём id в сессию)
      req.session.sid = newUser.id;
      req.session.isAuthorized = true;
      res.redirect("/");
    }
  });

module.exports = router;
