
import React, { useState } from "react";
import axios from "axios";
import { Link, navigate } from '@reach/router';
// import Navigator from "./Navigator";

const Login = (props) => {
    const {setUser} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [path, setpath] = useState("");

    const login = event => {
        event.preventDefault();
        localStorage.clear();
        axios.post("http://localhost:8000/api/users/login", { 
            email: email, 
            password: password,
            },
            {
                // this will force the sending of the credentials / cookies so they can be updated
                //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
                //    unless withCredentials is set to true before making the request
                withCredentials: true
            })
            .then((res) => {
                console.log("res.data: ", res.data);
                setUser(res.data);
                navigate("/experiments/allExperiments");
                
                // (res.data.userEmail === "admin@scilab.com"         // come back to this later.
                //     ?  navigate("/experiments/allExperiments")
                //     :  navigate("/experiments/filteredExeriments")
                // )
                localStorage.setItem('curUserName', res.data.userLoggedIn);
                localStorage.setItem('curUserEmail', res.data.userEmail);
            })
            .catch(err => {
                console.log(err.response);
                setErrorMessage(err.response.data.message);
            });
    };


    console.log("localstorage >: ",localStorage);
    const curUserName = localStorage.getItem('curUserName');
    console.log("cur username = ", curUserName);

    return (
    <div>
        <div className = "leftNav">
            {/* <Navigator /> */}
        </div>
        <div className = "centerPage">
            <h2>Login</h2>
            <p className="error-text">{errorMessage ? errorMessage : ""}</p>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <button 
                        type="submit"
                    >Sign In</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default Login;