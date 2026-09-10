const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
let buf = Buffer.from(content, 'utf8');
console.log(buf.toString('latin1').substring(0, 1000));
