const os = require('os')

// user info
const user = os.userInfo()
console.log(user)

// system uptime in seconds
const uptime = os.uptime()
console.log(`system uptime in seconds is ${uptime}`)

// system info
const systemInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(systemInfo)

