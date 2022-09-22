import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import InnerAxios from "../Utils/Config/InnerAxios";
import axios from "axios";

export default function Login() {

 
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
                window.localStorage.setItem("auth-token",response.headers["authorization"])
                alert("Login Successful!");
                navigate("/MainPage");
            })
            .catch((error: { response: { data: { message: any; }; }; }) => {
                alert("Login Unsuccessful");
            });

        setUsername("");
        setPassword("");
        
    }

    return (
        <>
            <body>
                <div>
                    <div className="background">
                        <div className="shape"></div>
                        <div className="shape"></div>
                    </div>
                    <form onSubmit={submitLogin}>
                        <h3>Welcome Back</h3>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" id="username" value={username} onChange={updateUsername}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" id="password" value={password} onChange={updatePassword}/>

                    
                        <button type="submit">Login</button>
                    </form>

                    
                </div>
            </body>

            <Link to="/">Back to Landing Page</Link>
        </>
    );

}