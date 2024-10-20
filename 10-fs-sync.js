// this is synchronous, meaning it will run line by line

const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log('task is starting')
console.log('done with the task')



