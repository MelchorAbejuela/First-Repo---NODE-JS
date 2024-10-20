const path = require('path') // initialization
console.log(path.sep) // // seperator

const filePath = path.join('/content', 'subfolder', 'test.txt') // arrange the given folder and sub into 1 and complete path
console.log(filePath)

const base = path.basename(filePath) // base name or file name without folder
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt') //  resolve a sequence of paths
console.log(absolute)




