const path = require('path');

const filePath = '/path/to/some/file.txt';

// 경로의 기본 정보
console.log('Directory:', path.dirname(filePath));
console.log('Filename:', path.basename(filePath));
console.log('Extension:', path.extname(filePath));

// 경로 결합
const absolutePath = path.join('/path', 'to', 'file.txt');
console.log('Absolute Path:', absolutePath);

// 절대 경로로 변환
const absolutePathFromRelative = path.resolve('folder', 'file.txt');
console.log('Absolute Path from Relative:', absolutePathFromRelative);