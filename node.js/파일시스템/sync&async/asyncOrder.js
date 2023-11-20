const fs = require('fs');

console.log('시작');
fs.readFile('./test1.txt', (err, data) => {
    console.log('1번', data.toString());
    fs.readFile('./test1.txt', (err, data) => {
        console.log('2번', data.toString());
        fs.readFile('./test1.txt', (err, data) => {
            console.log('3번', data.toString());
            fs.readFile('./test1.txt', (err, data) => {
                console.log('4번', data.toString());
                fs.readFile('./test1.txt', (err, data) => {
                    console.log('5번', data.toString());
                    fs.readFile('./test1.txt', (err, data) => {
                        console.log('6번', data.toString());
                        fs.readFile('./test1.txt', (err, data) => {
                            console.log('7번', data.toString());
                            fs.readFile('./test1.txt', (err, data) => {
                                console.log('8번', data.toString());
                                fs.readFile('./test1.txt', (err, data) => {
                                    console.log('9번', data.toString());
                                    fs.readFile('./test1.txt', (err, data) => {
                                        console.log('10번', data.toString());
                                        console.log('끝');
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
