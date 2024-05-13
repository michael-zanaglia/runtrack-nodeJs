const http = require("http");


http.createServer((req, res) => {
    res.write("Hello World!")
    res.end()
}).listen(8888)


// http://localhost:8888