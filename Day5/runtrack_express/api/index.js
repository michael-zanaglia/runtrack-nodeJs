const express = require("express");
const fs = require("fs");
const app = express();
const PORT = 3000;

app.use(express.json())

app.get("/etudiants", (req, res) => {
    let data = fs.readFileSync("student.json", "utf-8");
    data = JSON.parse(data)
    res.send(data)
})

app.get("/etudiant/:id", (req, res) => {
    let param = req.params.id
    console.log(typeof param)
    let data = fs.readFileSync("student.json", "utf-8");
    data = JSON.parse(data)
    let founded = false
    for (let d of data) {
        console.log(d.id)
        if (d.id == param) {
            res.send(d)
            founded = true
        }
    }
    if(!founded) {
        res.status(404).send({error: [404, "Not found"]})
    }
    
})

let data = JSON.parse(fs.readFileSync("student.json", "utf-8"));
    

let newStudent = JSON.parse(fs.readFileSync("newstudent.json", "utf-8"));

app.post("/etudiants", (req,res) => {
    let myBody = req.body;
    data.push(myBody);
    data = data.concat(newStudent)
    fs.writeFileSync("student.json", JSON.stringify(data));
    res.send("Done.");
})

app.delete("/etudiant/:id", (req,res) => {
    try {
        let param = req.params.id
 
        data = data.filter(element => element.id != param)
        
        fs.writeFileSync("student.json", JSON.stringify(data))
        res.send("Deleted.")  
    } catch (error) {
        res.status(400).send("Bad request", error)
    }
    

})

app.listen(3000, () => {
    console.log("Listening on port", PORT, "and the URL is http://localhost:3000")
})