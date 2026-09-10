const fs = require('fs');
const path = './src/data/creationScript.ts';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/^[^\w]*/, ''); // Remove all non-word chars from start
fs.writeFileSync(path, content, 'utf8');
