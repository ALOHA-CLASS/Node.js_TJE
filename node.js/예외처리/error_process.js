// uncaughtException : 예기치 못한 에러
process.on('uncaughtException', (err) => {
    console.log('예기치 못한 에러', err);
})

setInterval(() => {
    throw new Error('에러 강제 발생')
}, 2000) 


pro

