const fs = require("fs");
const http = require("http");
const url = require("url");

const myUrlHome = new URL("http://localhost:8081");
const myUrlAbout = new URL("http://localhost:8081");

myUrlHome.pathname = "/";
myUrlAbout.pathname = "/about";

http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'})
    if (req.url === myUrlHome.pathname){
        fs.readFile("./index.html", (err, file)=>{
            if (err){
                throw err;
            }
            res.write(file)
            res.end()
        })
    } else if (req.url === myUrlAbout.pathname){
        fs.readFile("./about.html", (err, file) => {
            if(err){
                throw err;
            }
            res.write(file)
            res.end()
        })
    }
    

}).listen(8081, ()=> {
    console.log("Serveur en écoute...")
})