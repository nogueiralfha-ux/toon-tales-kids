const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
const iconv = require('iconv-lite'); // maybe not installed? Let's use Buffer
let testStr = "GǦnesis";
let buf = Buffer.from(content, 'utf8');
console.log(buf.toString('latin1').substring(0, 100));
