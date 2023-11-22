const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

// dotenv 라이브러리를 사용하여 환경 변수를 로드하는 부분
// 이 메소드를 호출하면 프로젝트 루트에 위치한 .env 파일의 환경 변수가 process.env 객체에 추가됩니다.
dotenv.config();

// 👩‍💻 라우터 모듈 import
const indexRouter = require('./routes/index');
const boardRouter = require('./routes/board');

const app = express();

// 포트 설정: 환경 변수에서 PORT를 가져오고, 없을 경우 기본값으로 3000 사용
app.set('port', process.env.PORT || 3000);

// 뷰 엔진 설정: Pug를 사용하도록 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 로깅 미들웨어 설정: 개발 환경에서는 dev 모드로 로그를 출력
app.use(morgan('dev'));

// 정적 파일 제공 미들웨어 설정: public 폴더를 정적 파일 제공 디렉토리로 설정
app.use('/', express.static(path.join(__dirname, 'public')));

// JSON 파싱 미들웨어 설정
// - JSON 형식의 요청 본문을 파싱
// - URL 인코딩된 요청 본문을 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cookie-parser 미들웨어를 사용하여 쿠키를 파싱하는 부분
// process.env.COOKIE_SECRET는 .env 파일이나 환경 변수에서 설정한 비밀 키를 사용
app.use(cookieParser(process.env.COOKIE_SECRET));

// Express 애플리케이션에 세션 미들웨어 설정
app.use(session({
  resave: false,                            // 세션 데이터가 변경되지 않으면 서버에 다시 저장하지 않음
  saveUninitialized: false,                 // 초기화되지 않은 세션을 저장소에 저장하지 않음
  secret: process.env.COOKIE_SECRET,        // 세션 식별을 위한 비밀 키

  // 세션 쿠키 설정
  cookie: {
    httpOnly: true,                         // 브라우저에서 쿠키에 접근할 때만 가능하도록 httpOnly 속성 사용
    secure: false,                          // HTTPS가 아닌 환경에서도 쿠키 전송 허용
  },
  name: 'session-cookie',     // 세션 쿠키의 이름 설정
}));


// 👩‍💻 라우터 설정
app.use('/', indexRouter);
app.use('/board', boardRouter);

// 404 오류 처리 미들웨어
app.use((req, res, next) => {
  // 요청된 경로가 존재하지 않을 때 404 상태 코드와 'Not Found' 메시지를 응답으로 전송
  res.status(404).send('Not Found');
});

// 에러 처리 미들웨어
app.use((err, req, res, next) => {
  // 에러가 발생했을 때, 에러 메시지를 콘솔에 출력하고 500 상태 코드와 에러 메시지를 응답으로 전송
  console.error(err);
  res.status(500).send(err.message);
});

// Express 애플리케이션을 특정 포트에서 실행하는 부분
app.listen(app.get('port'), () => {
  // 애플리케이션이 실행되면 콘솔에 해당 포트에서 대기 중임을 출력
  console.log(app.get('port'), '번 포트에서 대기 중');
});