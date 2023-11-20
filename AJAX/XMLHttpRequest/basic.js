// XMLHttpRequest
// ❌ (에러) : 브라우저 객체이기 때문에, node 런타임 환경에서는 실행 불가


// XMLHttpRequest 객체 생성
var xhr = new XMLHttpRequest();

// 이벤트 핸들러 등록
xhr.onreadystatechange = function() {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // 요청이 완료되면 실행되는 코드
    if (xhr.status === 200) {
      // 성공적으로 응답 받았을 때의 코드
      console.log(xhr.responseText);
    } else {
      // 오류 처리 코드
      console.error('Request failed with status:', xhr.status);
    }
  }
};

var url = 'https://httpbin.org/get'

// 요청 열기
xhr.open('GET', url, true);

// 요청 전송
xhr.send();