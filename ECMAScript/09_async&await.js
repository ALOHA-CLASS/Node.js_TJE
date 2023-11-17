async function fetchData() {
    const response = await fetch('https://httpbin.org/get');
    const data = await response.json();
    return data;
}

fetchData()
    // 자바스크립트 변수 명명 규칙
    // ✅ '-' 사용 불가
    // http 메시지 헤더 '-' 사용한 헤더명이 있음
    // '-' 이 있는 속성 접근 방법 
    // ➡ 객체['sample-param'] 
    .then((result) => {
        console.log(result);
        console.log(result.headers.Host);
        console.log(result.headers['Accept-Encoding']);
    })
    .catch((error) => {
        console.log(error);
    })