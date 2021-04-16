// simpliest way
// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write('Welcome to our homepage!')
//     res.end()
// })

// server.listen(3000)

//another way
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our homepage!")
    } 
    if (req.url === '/about') {
        res.end('Goodbuy everybody!')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We cannot seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
    
})

server.listen(3000)