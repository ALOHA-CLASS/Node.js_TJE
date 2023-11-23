const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

app.set('port', process.env.PORT || 3000);

// Nunjucks 설정
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.set('view engine', 'njk');

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

// 라우터 모듈 import
const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');

// 라우터 설정
app.use('/', indexRouter);
app.use('/board', boardRouter);

// 404 오류 처리 미들웨어
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
