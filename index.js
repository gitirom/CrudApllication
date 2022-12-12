const express = require("express"); //is a built-in function to include external modules that exist in separate files
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());// cros get the parmission to node js to accept any domain

app.use(express.json());//to parse every send from frontend 

const db = mysql.createConnection({ //creat connection 
    user: "root",
    host: "localhost",
    password: "root2002",
    database: "loginsystem",
});
        //this is URI
app.post('/register', (req, res) => { //calling http request to make shuer that the username and password passing from frontens to backend 
    
    //get info from server
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "INSERT INTO loginuser (username, password) VALUES (?,?)",
        [username, password], 
        (err, result) => {
        console.log(err);
    });
}); 

// login part
// identification user hier
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM loginuser WHERE username = ? AND password = ?",//check if the username = to req.body.username and password to 
        [username, password], 
        (err, result) => {
            if(err){
                res.send({err: err});
            }//if ther is no err continue
                if(result.length > 0){
                    res.send(result)
                }else {
                    res.send({message: "Wrong username/password combination"});
                }
            
        
    });
}); 







app.listen(3001, () => {
    console.log("running server");
});