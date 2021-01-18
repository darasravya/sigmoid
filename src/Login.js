import {useState, useCallback, useContext} from 'react';
import React from 'react';
import axios from 'axios';
import { TokenContext } from "./TokenContext.js";
import Header from './Header';
import './Login.css';



function Login() {
    const [token, setToken] = useContext(TokenContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(true);

    const loginUser = () => {
        axios
          .post('https://sigviewauth.sigmoid.io/signIn', { email, password, rememberMe })
          .then(res => {
            console.log("LOGIN SUCCESS");
            setToken(res.data.token);
          })
          .catch(err => {
            if (err.status === 401) {
              console.log("failed");
            }
          });
    }

  return (
    <div className="">
      <Header title={"Login Page"}/>
      <div className="login-page-outer">
          <div className="login-content">
            <div className="fields">
                <label>Email</label>
                <input type='email' placeholder='Enter email' name='email' onChange={useCallback((e)=> setEmail(e.target.value))}></input>
            </div>
            <div className="fields">
                <label>Password</label>
                <input type='password' placeholder='Enter password' name='password' onChange={useCallback((e)=> setPassword(e.target.value))}></input>
            </div>
            <button type='submit' onClick={loginUser}>Login</button>
            <label>
                <input type='checkbox' checked='checked' name='rememberMe' onChange={useCallback(()=>{setRememberMe(!rememberMe)})}></input>
                Remember Me
            </label>
          </div>
      </div>
    </div>
  );
}

export default Login;