// fetch를 사용하여 POST 요청 보내기
const url = 'https://httpbin.org/post'
const data = { name : 'joeun', age : 20 }
const init = {
    method  : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body    : JSON.stringify(data)
}

fetch(url, init)
    .then(response => {
        // 서버 응답을 JSON 형식으로 파싱
        return response.json();
    })
    .then(data => {
        // 파싱된 데이터 출력
        console.log(data);
    })
    .catch(error => {
        // 오류 처리
        console.error('Request failed:', error);
    });