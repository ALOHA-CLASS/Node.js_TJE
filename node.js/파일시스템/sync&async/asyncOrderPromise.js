const fs = require('fs').promises;

console.log('시작');
fs.readFile('./test1.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./test2.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./test3.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    console.log('끝');
  })
  .catch((err) => {
    console.error(err);
  });

