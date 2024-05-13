const fs = require("fs");

let myTxt = "Je manipule les fichiers avec un module node !"
fs.writeFileSync("./data.txt", myTxt, (err) => {
    if (err) { throw err }
    console.log("Modifié")
});
let readNewTxt = fs.readFileSync('./data.txt', 'utf8')
console.log("Contenu du fichier data.txt apres writeFile :", readNewTxt)

