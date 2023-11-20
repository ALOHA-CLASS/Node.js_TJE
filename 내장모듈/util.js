const util = require('util');

// 1. promisify
const fs = require('fs');

// 콜백 기반 ➡ Promise 패턴으로 변경
const readFile = util.promisify(fs.readFile);   

readFile('example.txt', 'utf8')
  .then((data) => console.log('File content:', data))
  .catch((error) => console.error('Error reading file:', error));

// 2. inherits
function Base() {
  this.name = 'Base';
}

function Child() {
  Base.call(this);
  this.name = 'Child';
}

// Base ⬅ Child  
// - 부모 클래스 : Base
// - 자식 클래스 : Child
util.inherits(Child, Base);

const childInstance = new Child();
console.log('Child name:', childInstance.name);

// 3. format
const message = util.format('%s %s', 'Hello', 'World');
console.log('Formatted message:', message);

// 4. inspect
const obj = { name: 'John', age: 30 };
const str = util.inspect(obj);
console.log('Inspect result:', str);