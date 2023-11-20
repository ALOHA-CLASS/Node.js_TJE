const crypto = require('crypto');

const password = '123456';
const salt = 'random_salt'; // 임의의 솔트 값

// 솔트와 비밀번호를 결합하여 해시화
const hashedPassword = crypto.createHash('sha256').update(salt + password).digest('hex');

console.log('Hashed Password:', hashedPassword);


// readline : 사용자 입력을 받기 위한 모듈
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 비밀번호 입력
rl.question('Enter your password: ', (userInputPassword) => {

    // 입력된 비밀번호
    console.log('You entered:', userInputPassword);

    // 비밀번호 검증
    const hashedInputPassword = crypto.createHash('sha256').update(salt + userInputPassword).digest('hex');

    // 사용자가 입력한 비밀번호와 저장된 해시된 비밀번호를 비교
    if (hashedInputPassword === hashedPassword) {
        console.log('Password Match: User is authenticated.');
    } else {
        console.log('Password Mismatch: User authentication failed.');
    }
    
    // 사용이 끝나면 인터페이스를 닫음
    rl.close();
});

// 인터페이스가 닫힐 때의 이벤트 리스너
rl.on('close', () => {
    console.log('Input interface closed.');
});