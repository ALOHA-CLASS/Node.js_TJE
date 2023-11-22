// Node.js 모듈을 가져옵니다.
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

// 현재 프로세스가 마스터 프로세스인지 확인합니다.
if (cluster.isMaster) {
  // 마스터 프로세스의 PID를 출력합니다.
  console.log(`Master ${process.pid} is running`);

  // CPU 코어 수만큼 워커 프로세스를 생성합니다.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // 워커 프로세스가 종료될 때의 이벤트 핸들러를 등록합니다.
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // 각 워커 프로세스는 TCP 연결을 공유할 수 있습니다.
  // 이 예제에서는 HTTP 서버로 사용됩니다.
  http.createServer((req, res) => {
    // HTTP 응답 헤더를 설정합니다.
    res.writeHead(200);

    // 클라이언트에게 'Hello World'를 응답으로 전송합니다.
    res.end('Hello World\n');
  }).listen(8000); // 8000번 포트에서 서버를 시작합니다.

  // 현재 워커 프로세스의 PID를 출력합니다.
  console.log(`Worker ${process.pid} started`);
}