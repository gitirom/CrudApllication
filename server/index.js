//a simple express app
//nodemon index.js for relaod automaticly
const express = require('express') 
const app = express()

app.get("/", (req, res) => {
    res.send("Hallo Ramdhane was machen sie your are the best ");
});

app.listen(3001, () => {
    console.log("runing on port 3001");
});