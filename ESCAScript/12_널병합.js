// 👩‍💻 null 병합
// 변수가 null 또는 undefined인 경우에 대체값 사용
const userInput = null;
const username = userInput ?? 'Guest';

console.log(username); // 출력: 'Guest'