const express = require('express');
const homeHTML = require("./views/index.js"); 
const app = express();

app.use("/", express.static(__dirname + '/public'))
app.get('/', (req, res) => {
    res.send(homeHTML)
})


let port = process.env.PORT || 6969;
let server = app.listen(port);

console.log(`
    App running at: http://localhost:${port}
`);