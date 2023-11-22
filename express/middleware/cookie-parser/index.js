const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 3000;

// cookie-parser를 사용하여 쿠키 파싱
app.use(cookieParser());

// 라우트에서 쿠키 설정 및 읽기
app.get('/set-cookie', (req, res) => {
  // 쿠키 설정
  res.cookie('username', 'john-doe', { maxAge: 900000, httpOnly: true });

  // 쿠키 읽기
  const username = req.cookies.username;
  res.send(`Username from cookie: ${username}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});