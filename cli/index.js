// 创建题目的文件
const fs = require('fs');
const { resolve } = require('path');

const [name] = process.argv.splice(2);
const basePath = resolve(process.cwd(), `src/${name}`);

if (!fs.existsSync(basePath)) {
    fs.mkdirSync(basePath);
}

fs.writeFileSync(resolve(basePath, 'README.md'), '');
fs.writeFileSync(resolve(basePath, 'template.ts'), '');
fs.writeFileSync(resolve(basePath, 'test-cases.ts'), '');