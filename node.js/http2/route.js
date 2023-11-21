const http = require('http');
const fs = require('fs');

// 서버 생성
const server = http.createServer((req, res) => {
  // 요청 메서드와 URL 파싱
  const method = req.method;
  const url = req.url;

  // 주소 및 메서드에 따른 응답 처리
  if (method === 'GET' && url === '/') {
    // GET / - index.html 파일 제공
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (method === 'GET' && url === '/users') {
    // GET /users - 사용자 목록
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const users = [{ id: 1, name: 'User 1' }, { id: 2, name: 'User 2' }];
    res.end(JSON.stringify(users));
  } 

  else if (method === 'GET' && url.startsWith('/users/')) {
    // GET /users/id - 해당 id의 사용자 정보 제공
    const userId = url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`User information for ID ${userId}`);
  } 

  else if (method === 'POST' && url === '/users') {
    // POST /users - 사용자 등록
    res.writeHead(201, { 'Content-Type': 'text/plain' });
    res.end('User created successfully');
  } 

  else if (method === 'PUT' && url.startsWith('/users/')) {
    // PUT /users/id - 해당 id의 사용자 수정
    const userId = url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`User information updated for ID ${userId}`);
  } 
  
  else if (method === 'DELETE' && url.startsWith('/users/')) {
    // DELETE /users/id - 해당 id의 사용자 삭제
    const userId = url.split('/')[2];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`User ${userId} deleted`);
  } 
  
  else if (method === 'GET' && url === '/about') {
    // GET /about - about.html 파일 제공
    fs.readFile('about.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // 그 외의 경우 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// 서버를 3000 포트에서 실행
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});