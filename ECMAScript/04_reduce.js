const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

console.log(sum); // 출력: 15