import React, { useState } from "react";
import { Link } from "react-router-dom";
import InnerAxios from "../Utils/Config/InnerAxios";
import { useNavigate } from "react-router-dom";


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
            .then(() => {
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

            <Link to="/">Back to Landing Page</Link>
        </>
    );

}