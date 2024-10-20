const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' }); // this will set the content type to HTML

    if (req.url === '/') {
        res.end('Welcome to Home page')
    } else if (req.url === '/about') {
        res.end('Welcome to About page')
    } else {
        res.end(
            `<h2>error 404</h2>
            <a href="/">Go back to Home page</a>`
        )
    }
})

server.listen(5000)