// hello world example express
const express = require("express"); // updated version
const app = express() // .. app module scafholding
const path = require("path"); // path module defined 
const axios = require("axios"); // .. require axios 
const port = 3000; // initailize one port
// app methods
app.get("/", (req, res) => {
 res.sendFile("index.html", { root: path.join(__dirname)});
});
// api route path with async function 
app.get("/api", async(req, res) => {
    let url = ' https://newsapi.org/v2/everything?' + req._parsedUrl.query
    let r = await axios(url);
    let a = r.data
    res.json(a); 
});

//  app listen
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
