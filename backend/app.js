require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { errors } = require('celebrate');
const { createUser, login } = require('./controllers/users');
const {
  validateLogin,
  validateUser,
} = require('./middlewares/validation');
const auth = require('./middlewares/auth');
const handelError = require('./middlewares/handelError');
const NotFoundError = require('./errors/NotFoundError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

const app = express();
app.use(express.json());
app.use(cors());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(requestLogger);
app.post('/signin', validateLogin, login);
app.post('/signup', validateUser, createUser);

app.use(auth);
app.use('/users', require('./routes/users'));
app.use('/cards', require('./routes/cards'));

app.all('*', (req, res, next) => {
  next(new NotFoundError('Страница с таким url не найдена'));
});

app.use(errorLogger);
app.use(errors());
app.use(handelError);

app.listen(PORT, () => {
  console.log(`Запуск сервера ${PORT}`);
});
