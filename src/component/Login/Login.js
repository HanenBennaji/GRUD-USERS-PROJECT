import React, { useState } from 'react';
import './Login.css';
import {UsersTable} from "../../component/UsersTable.js"

export default function Login() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
const [userExist, setUserExist] = React.useState(false);


async function   loginUser (e) {
  e.preventDefault()
  var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": username,
  "password": password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

 fetch("http://localhost:3330/api/v1/login", requestOptions)
  .then(response =>response.json())
    .then((data) => {
        if (data === true) {
                
             setUserExist(true);
              
             }
      })
  .catch(error => console.log('error', error));
}
  return(
    (userExist? <UsersTable/> :
    <div className="login-wrapper">
      <h1 >Please Log In</h1>
      <form  className='form'>
        <label>
          <p >Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} className='form--input ' />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} className='form--input '/>
        </label>
        <div>
        <button onClick={loginUser} className='form--submit'>Login</button>
          
                </div>
      </form>
    </div>)
  )
}

