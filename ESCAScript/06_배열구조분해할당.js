const numbers = [1, 2, 3, 4, 5];

// 배열의 구조 분해 할당
const [first, second, ...rest] = numbers;

console.log(first); // 출력: 1
console.log(second); // 출력: 2
console.log(rest); // 출력: [3, 4, 5]