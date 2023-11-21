const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { 'Set-Cookie': 'mycookie=test' });
    res.end('Hello Cookie');
})

.listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다!');
});