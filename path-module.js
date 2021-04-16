const path = require('path');
console.log(path.sep); // it shows which separator is used for this OS


// it normalizes path
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath); // result: '\content\subfolder\text.txt'

const base = path.basename(filePath);
console.log(base);  // result: 'text.txt'

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);