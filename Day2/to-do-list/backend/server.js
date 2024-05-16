const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    console.clear()
    console.log("bienvenue dans le serveur", req.method)


    if (req.method==='OPTIONS'){
        res.setHeader('Access-Control-Allow-Methods', 'DELETE')
        res.setHeader('Access-Control-Allow-Origin', '*') 
        res.end()
    }
    if (req.method==='POST'){
        const path = req.url.split("/")
        const id = path[2]
        const name = decodeURIComponent(path[3])
        const desc = decodeURIComponent(path[4])
        let newData = {
            "id" : id,
            "name" : name,
            "description" : desc,
            "statut" : false 
        }
        let prevData = {};
        if (fs.existsSync("data.json")){
            try {
                prevData = JSON.parse(fs.readFileSync("data.json", "utf-8"))
            } catch {
                prevData = {"task" : []}
            }
        } 

        prevData.task.push(newData);
        prevData = JSON.stringify(prevData)
        fs.writeFileSync("data.json", prevData)
        res.writeHead(200, {
            "method" : "POST",
            'content-type' : 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173'
        })
        res.end(prevData)         
    } else if (req.method==='GET') {
        if(req.url === "/tasks"){
            const getData = fs.readFileSync("data.json", "utf-8");
            res.writeHead(200, {
                "method" : "GET",
                'content-type' : 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:5173'
            })
            res.end(getData)  
        }
    } else if (req.method==='DELETE') {
        const path = req.url.split("/")
        const id = path[3]
        const getData = JSON.parse(fs.readFileSync("data.json", "utf-8"));
        let newData;
        for (let object of getData.task) {
            if (object.id === id) {
                newData = getData.task.filter(elem => elem !== object)
            }
        }
        newData = JSON.stringify({task : newData})
        fs.writeFileSync("data.json", newData)
        res.writeHead(200, {
            "method" : "DELETE",
            'content-type' : 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:5173'
        })
        res.end(newData)  
    }
}).listen(8080, () => {
    console.log("Serveur en écoute !")
})

//process.on('exit', (code) => {
//    console.log(`Le processus est sur le point de se terminer avec le code ${code}`);
//});