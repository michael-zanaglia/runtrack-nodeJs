const u = require("url");
const myURL = new URL('https://www.google.com/search?q=nodejs');

console.log("Protocole :", myURL.protocol)
console.log("Nom d'hote :", myURL.hostname)
console.log("Les Paramètres :", myURL.searchParams.get("q"))


myURL.hostname = "www.laplateforme.io"
myURL.pathname = "/"
myURL.search = "?lang=fr"
// Ajouter un nouveau parametre => myURL.searchParams.set("lang","fr")

console.log("Nouvelle URL :\n" + myURL.toString())