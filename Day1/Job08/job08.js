const fs = require("fs");

const txt = fs.readFileSync('./data.txt', {encoding : "utf8", flag : "r"});

console.log(txt[0])

let secondTxt = "";

for (let i = 0; i<txt.length; i++) {
    console.log(txt[i])
    if (i%2 === 0){
        secondTxt += txt[i]
    }
}

console.log("Une Lettre sur deux du fichier data.txt :\n" + secondTxt)