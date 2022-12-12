import React, {useState} from "react";
import './App.css';
import Axios from "axios";

function App() {
    const [usernameReg, setusernameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const [loginstatus, setloginstatus] = useState("");


    const register = () => {// send http request to data base contain username and password
      Axios.post('http://localhost:3001/register', {
        username: usernameReg,
        password: passwordReg,
      }).then((Response) => {
        console.log(Response);
      });
    };

    const login = () => {// send http request to data base contain username and password
      Axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
      }).then((Response) => {
        
        //afficher le message err if user absent present else afficher username if ther is
        if(Response.data.message){
          setloginstatus(Response.data.message);
        }else{
          setloginstatus(Response.data[0].username);
        }

        console.log(Response.data);
      });
    };

  return (
    <div className="App">
      <div className='registration'>
        <h1>Registration</h1>
        <label>UserName</label><br/>
        <input type='text' onChange={(e) => {
          setusernameReg(e.target.value) // get the info from the input
          }} /> <br/>
        <label>Password</label><br/>
        <input type='text' onChange={(e) => {
          setpasswordReg(e.target.value)
        }} /><br/>
        <button onClick={register}>Register</button>
      </div>
      <div className='Login'>




        <h1>Login</h1>
        <input type='text' placeholder='Username...' onChange={(e) => {
          setusername(e.target.value)
        }}/><br/>
        <input type='text' placeholder='Password...' onChange={(e) => {
          setpassword(e.target.value)
        }}/><br/>
        <button onClick={login}> Login </button>
      </div>
      <h1 style={{color:'red'}}>{loginstatus}</h1>
    </div>
  );
}

export default App;
