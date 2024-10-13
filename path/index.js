const path = require("path");

console.log(path.sep);

console.log(process.env.PATH);

console.log(path.delimiter);

const filePath1 = '/public_html/home/index.html';

const currentFilePath = __filename;
console.log(currentFilePath);

let basename = path.basename(currentFilePath);
console.log('basename > ',basename);

let basenameWithoutExt = path.basename(currentFilePath, '.js');
console.log(basenameWithoutExt);

let dirname = path.dirname(currentFilePath);
console.log('dirname > ',dirname);

console.log('ext > ',path.extname(currentFilePath));
console.log('ext > ',path.extname('index.md.js'));

let pathToFile = path.format({
    dir: '/public_html/home',
    base: 'index.html'
});

console.log('pathToFile > ', pathToFile);

console.log('IsAbsolute ', path.isAbsolute(currentFilePath));
console.log('IsAbsolute ', path.isAbsolute('/index.js'));
console.log('IsAbsolute ', path.isAbsolute('./index.js'));
console.log('IsAbsolute ', path.isAbsolute('../index.js'));

let pathToDir = path.join('/home', 'js', 'dist', 'index.js');
console.log('pathToDir > ', pathToDir);

console.log('parse > ', path.parse(currentFilePath));

console.log('relative path > ', path.relative('/home/user/config', '/home/user/js/'));

console.log('resolve > ', path.resolve());

console.log('normalize > ', path.normalize('//home//user//js'));
