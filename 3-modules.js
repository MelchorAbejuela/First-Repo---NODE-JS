// coming from 4 and 5
const sayHi = require('./5-utils')
const { john, peter } = require('./4-names')

sayHi('susan')
sayHi(john)
sayHi(peter)

// coming from 6
const datas = require('./6-otherway-exporting')
console.log(datas)

// 7
require('./7-numbers')