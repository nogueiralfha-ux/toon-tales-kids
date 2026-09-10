const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');

// The file was double encoded UTF-8 saved as UTF-8. 
// Convert back:
let buf = Buffer.from(content, 'latin1');
let fixed = buf.toString('utf8');

// Fix the few characters that latin1 doesn't cover from Windows-1252:
fixed = fixed.replace(/!Ò/g, 'ÇÃO');
fixed = fixed.replace(/\x1C/g, '–');

fs.writeFileSync(path, fixed, 'utf8');
console.log("TEXTO CORRIGIDO!");
