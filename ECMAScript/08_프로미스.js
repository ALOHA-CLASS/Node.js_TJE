// Promise
// 프로미스를 사용한 타이머 예시 코드
function delay(ms) {
    return new Promise((resolve, reject) => {
      // setTimeout 함수를 사용하여 비동기 작업 모방
      setTimeout(() => {
        // ms 시간이 지난 후, resolve를 호출하여 프로미스 이행
        resolve(`Waited for ${ms} milliseconds`);
      }, ms);
    });
}
  
// 프로미스를 이용한 타이머 사용
delay(2000) // 2초 동안 기다림
.then((result) => {
    console.log(result); // 출력: 'Waited for 2000 milliseconds'
    // 이후의 작업을 이어서 처리할 수 있음
})
.catch((error) => {
    console.error(error); // 에러가 발생한 경우 처리
});