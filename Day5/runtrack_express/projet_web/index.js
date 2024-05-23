const express = require("express");
const path = require("path");
const app = express();
const PORT = 80;

const home = "/";
const about = "/about";

app.listen(PORT, () => {
    console.log("J'écoute sur le port", PORT, "à l'URL suivante : http://localhost:80")
})

app.use(express.static(path.join(__dirname, "public")));

app.get(about, (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"))
})

app.get(home, (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});