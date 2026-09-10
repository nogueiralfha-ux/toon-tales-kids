const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
let buf = Buffer.from(content, 'latin1');
console.log(buf.toString('utf8').substring(0, 1000));
