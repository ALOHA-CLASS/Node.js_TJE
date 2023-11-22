const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// body-parser를 사용하여 JSON 형식의 데이터 파싱
app.use(bodyParser.json());

// body-parser를 사용하여 URL-encoded 데이터 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// POST 요청 처리
app.post('/submit', (req, res) => {
  // req.body를 통해 파싱된 데이터에 접근 가능
  const username = req.body.username;
  const password = req.body.password;

  // 처리 로직
  res.send(`Received data: ${username}, ${password}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});