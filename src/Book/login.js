import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import '../index.css';
import {Select,Input,Button,Row, Col} from "antd";

function Login() {
const [emailInput, setEmailInput] = useState('');
const [passwordInput, setPasswordInput] = useState('');

const history = useHistory();

const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
}

const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
}

const handleLoginSubmit = (e) => {
    e.preventDefault();
    let hardcodedCred = {
        email: 'librarian@hcl.com',
        password: 'hcl1234'
    }

    if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
       history.push('/book');
    } else {
        //bad combination
        alert('wrong email or password combination');
    }
}

const handleUserLoginSubmit = (e) => {
    e.preventDefault();
    if ((emailInput !== "") && (passwordInput !== "")) {
        //combination is good. Log them in.
        //this token can be anything. You can use random.org to generate a random string;
        const token = '123456abcdef';
        sessionStorage.setItem('auth-token', token);
        //go to www.website.com/todo
       history.push('/book');
    } else {
        //bad combination
        alert('Please fill the required info');
    }
}

return (
    <div style={{marginTop: "5%"}}className="login-page">
        <form autoComplete="off">
        <h2 style={{marginLeft: "40%", marginRight: "40%"}}>Welcome to HCL Library</h2>

            <table style={{marginLeft: "auto", marginRight: "auto"}}>
               <tr>
                <td>Email address</td>
                    <td><input type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={emailInput}
                onChange={handleEmailChange} />
                </td>
                </tr>

                <tr>
                    <td>Password</td>
                   <td> <input
                type="password"
                autoComplete="new-password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                value={passwordInput}
                onChange={handlePasswordChange} /></td>
                </tr>
<tr>
    <td  span={2}></td>
               <td>  <Button type="primary" onClick={handleLoginSubmit}>
                Admin Login
            </Button>
          
          <Button type="primary" onClick={handleUserLoginSubmit} className="btn btn-primary btn-block">
                User Login
            </Button></td>
            </tr>  
           
            </table>
            </form>
            
    </div>
  );
}

export default Login;