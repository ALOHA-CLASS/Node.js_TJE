function regularFunction() {
    console.log(arguments);
}
  
regularFunction(1, 'hello', true);

const arrowFunction = () => {
    // console.log(arguments); // 에러: arguments는 화살표 함수에서 사용 불가
};

arrowFunction(1, 'hello', true);