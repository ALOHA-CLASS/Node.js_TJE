const url = require('url');

const urlString = 'https://www.example.com:8080/path?query=string#fragment';

// URL 파싱
const parsedUrl = url.parse(urlString, true);       // url 문자열 ➡ Url 객체로 변환
console.log('Parsed URL:', parsedUrl);

// URL 객체를 문자열로 변환
const formattedUrl = url.format(parsedUrl);         // Url 객체 ➡ url 문자열로 변환
console.log('Formatted URL:', formattedUrl);

// 상대 경로 해석
const resolvedUrl = url.resolve('/images', 'logo.png');
console.log('Resolved URL:', resolvedUrl);