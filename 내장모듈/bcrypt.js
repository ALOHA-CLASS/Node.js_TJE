const bcrypt = require('bcrypt');
const readline = require('readline');

const saltRounds = 10; // 솔트를 생성하는 라운드 수
const salt = bcrypt.genSaltSync(saltRounds); // 솔트 생성

const password = '123456';
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Hashed Password:', hashedPassword);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 비밀번호 입력
rl.question('Enter your password: ', (userInputPassword) => {
  // 입력된 비밀번호
  console.log('You entered:', userInputPassword);

  // 비밀번호 검증
  bcrypt.compare(userInputPassword, hashedPassword, (err, result) => {
    if (err) {
      console.error('Comparison Error:', err);
    } else {
      if (result) {
        console.log('Password Match: User is authenticated.');
      } else {
        console.log('Password Mismatch: User authentication failed.');
      }
    }
    
    // 사용이 끝나면 인터페이스를 닫음
    rl.close();
  });
});

// 인터페이스가 닫힐 때의 이벤트 리스너
rl.on('close', () => {
  console.log('Input interface closed.');
});