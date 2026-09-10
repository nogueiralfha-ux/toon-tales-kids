const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
let buf = Buffer.from(content, 'latin1');
let fixed = buf.toString('utf8');

fixed = fixed.replace(/^\uFFFD/, ''); // BOM
fixed = fixed.replace(/\x1C/g, '-');
fixed = fixed.replace(/CRIA!ÒO/g, 'CRIAÇÃO');
fixed = fixed.replace(//g, '-');

fs.writeFileSync(path, fixed, 'utf8');
console.log('Fixed file.');
