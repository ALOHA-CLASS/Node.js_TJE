// 매개변수에서의 구조 분해 할당
function functionName({ param1, param2, param3 }) {
    console.log(`param1: ${param1}, param2: ${param2}, param3: ${param3}`);
}

// 화살표 함수로 쓸 경우
let arrowFunc = ({ param1, param2, param3}) => {
    console.log(`param1: ${param1}, param2: ${param2}, param3: ${param3}`);
}
  
const params = {
    param1: 1,
    param2: 2,
    param3: 3
};

functionName(params); 
arrowFunc(params)