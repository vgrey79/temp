// reading files
const {readFileSync, writeFileSync} = require('fs');
console.log(readFileSync);

const first = readFileSync('./content/subfolder/first.txt', 'utf8')
const second = readFileSync('./content/subfolder/second.txt', 'utf8')
console.log(first, '   ', second);

// writing files
writeFileSync('./content/result.txt', `Here is a result: ${first} and ${second}`)

writeFileSync('./content/result.txt', `Here is a result: ${first} and ${second}`, {flag: 'a'}) //flag: a allows us to add content to the previous content