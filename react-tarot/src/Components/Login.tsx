import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerAxios from "../Utils/Config/InnerAxios";
import { useNavigate } from "react-router-dom";
import MoonWater from '../Assets/MoonWater.gif'
import '../Utils/CSS/Login.css'

 
    InnerAxios.interceptors.response.use(
        (response : any) => {
        console.log(response);
        // Important: response interceptors **must** return the response.
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      });
      export default function Login() {    
    const [username, setUsername] = useState("");
    
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    function updateUsername(event: any) {
        setUsername(event.target.value);
    }

    function updatePassword(event: any) {
        setPassword(event.target.value);
    }

    function submitLogin(event: { preventDefault: () => void; }) {
        event.preventDefault();

        InnerAxios.post("/auth/login", {
            username: username,
            password: password,
            
        })
            .then((response) => {
                let user = { ...response.data };
                window.sessionStorage.setItem("user", JSON.stringify(user));
                window.sessionStorage.setItem("auth-token",response.headers["authorization"])
                localStorage.setItem("user",response.data.id)
                alert("Login Successful!");
                navigate('/MainPage');
            
            })
            .catch((error: { response: { data: { message: any; }; }; }) => {
                alert(error.response.data.message);
            });

        setUsername("");
        setPassword("");
        
    }

    return (
        <>
         <div className='backVid' >
      <img src={require('../Assets/MoonWater.gif')} />
      </div>
            <div className ="Log">
          
                <form onSubmit={submitLogin}>
                    <h3>Welcome Back</h3>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Username" id="username" value={username} onChange={updateUsername}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Password" id="password" value={password} onChange={updatePassword}/>

                
                    <button type="submit">Login</button>
                    <br></br>
                    <div className="linked">
                    <Link to="/">Back to Landing Page</Link>
                    </div>
           
                </form> 
            </div>
           
        </>
    );

}