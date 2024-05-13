const http = require("http");
const fs = require("fs");

fs.readFile('./index.html',(err, file) => {
    if(err){
        throw err;
    };

    http.createServer((req, res) => {
        res.writeHead(200, {'content-type':'text/html'});
        res.write(file);
        res.end();
    }).listen(8080, ()=> {
        console.log("J'écoute sur le serveur...")
    })
})

// http://localhost:8080
