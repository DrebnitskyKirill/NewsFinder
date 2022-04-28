require('dotenv').config();

// npm
const express = require('express');
const config = require('./config/config');

// routers
const mainRouter = require('./routes/main.route');

// app && PORT (создаем сервер)
const app = express();
const PORT = process.env.PORT ?? 3000;

// config
config(app);

// routes
app.use('/', mainRouter);

// listen
app.listen(PORT, () => { console.log(`*** Working at PORT: ${PORT} ***`); });
