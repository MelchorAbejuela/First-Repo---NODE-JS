// local dependency - can be use only in your project (current folder)
// example commad: npm i (package name)

// global dependency - can be use globally (any folder, any projecr in your computer)
// example command: npm i -g (package name)

// package.json - used to store important info about project/package
// 1st way: npm init (step by step, press enter to skip)
// 2nd way: npm init -y (everything is default)

const ld = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = ld.flattenDeep(items)
console.log(newItems)