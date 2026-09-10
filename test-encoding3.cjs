const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
let buf = Buffer.from(content, 'latin1');
let fixed = buf.toString('utf8');
let hasErrors = fixed.match(/.{0,20}.{0,20}/g);
console.log(hasErrors);
