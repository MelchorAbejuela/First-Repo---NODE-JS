// since this is async, it will not block the block of code next to it, even though it's not finish yet

const { readFile, writeFile, read } = require('fs')
console.log('start') // flow 1

readFile('./content/first.txt', 'utf-8', (err, data1) => {
    if (err) {
        console.log(err)
    }
    const result1 = data1

    readFile('./content/second.txt', 'utf-8', (err, data2) => {
        if (err) {
            console.log(err)
        }
        const result2 = data2

        writeFile('./content/the-result.txt', `this is the result: ${result1}, ${result2}`, (err) => {
            if (err) {
                console.log(err)
            }
            console.log('processing task') // flow num 3
        })
    })
})
console.log('proceeding to next task') // flow num 2