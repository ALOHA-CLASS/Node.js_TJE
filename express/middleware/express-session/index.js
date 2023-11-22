const express = require('express');
const session = require('express-session');
const app = express();
const port = 3000;

// express-session을 사용하여 세션 설정
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// 세션 등록
app.get('/set-session', (req, res) => {
  req.session.username = 'john-doe';
  res.send('Session is set');
});

// 세션 확인
app.get('/get-session', (req, res) => {
  const username = req.session.username;
  res.send(`Username from session: ${username}`);
});

// 세션 모두 제거 (로그아웃)
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Logged out');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});