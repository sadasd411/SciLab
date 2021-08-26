
import React, { useState } from "react";
import axios from "axios";
import { Links, navigate } from '@reach/router';
import Navigator from "./Navigator";

const RegisterUser = props => {
    const [confirmReg, setConfirmReg] = useState("");
    const [errs, setErrs] = useState({});

    // CHECK THIS OUT!!!!
    //    using a single state object to hold all data!
    const [ user, setUser ] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "", 
        password: "", 
        confirmPassword: "",
    })

    // using a single function to update the state object
    //    we can use the input's name attribute as the key in to the object
    const handleChange = (e) => {
        setUser({
        ...user,
        [e.target.name]: e.target.value,
        })
    }

    const register = e => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/users/register", 
        user,             // the user state is already an object with the correct keys and values!
        {
            // this will force the sending of the credentials / cookies so they can be updated
            //    XMLHttpRequest from a different domain cannot set cookie values for their own domain 
            //    unless withCredentials is set to true before making the request
            withCredentials: true,
        })
        .then((res) => {
            console.log(res.data);

            // when we successfully created the account, reset state for registration form
            //    We do this if we are NOT navigating automatically away from the page
            setUser({
            firstName: "",
            lastName: "", 
            userName: "",
            email: "", 
            password: "", 
            confirmPassword: "",
            })

            setConfirmReg("Thank you for Registering, you can now log in!");
            setErrs({});  // remember to reset errors state if it was successful
            navigate("/login");
            
        })
        .catch((err) => {
            console.log(err);
            console.log(err.response.data);
            setErrs(err.response.data.errors);
        });
    };

    return (
        <div>
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                <h2>Register</h2>
                {
                    confirmReg ? 
                    <h4 style={{color: "green"}}>{confirmReg}</h4>
                    : null
                }
                <form className = "loginBox" onSubmit={register}>
                    <div>
                        <label>firstName</label>
                        {
                            errs.firstName ? 
                            <span className="error-text">{ errs.firstName.message }</span>
                            : null
                        }
                        <input
                            type="text"
                            name="firstName"
                            value={user.firstName}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>lastName</label>
                        {
                            errs.lastName ? 
                            <span className="error-text">{ errs.lastName.message }</span>
                            : null
                        }
                        <input
                            type="text"
                            name="lastName"
                            value={user.lastName}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>userName</label>
                        {
                            errs.userName ? 
                            <span className="error-text">{ errs.userName.message }</span>
                            : null
                        }
                        <input
                            type="text"
                            name="userName"
                            value={user.userName}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        {
                            errs.email? 
                            <span className="error-text">{ errs.email.message }</span>
                            : null
                        }
                        <input
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={ handleChange }
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        {
                            errs.password ? 
                            <span className="error-text">{ errs.password.message }</span>
                            : null
                        }
                        <input
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={ handleChange }
                        />
                        </div>
                    <div>
                        <label>Confirm Password</label>
                        {
                            errs.confirmPassword? 
                            <span className="error-text">{ errs.confirmPassword.message }</span>
                            : null
                        }
                        <input
                            type="password"
                            name="confirmPassword"
                            value={user.confirmPassword}
                            onChange={ handleChange }
                    />
                    </div>
                    <div className="center">
                        <button className = "loginBtn"
                            type="submit"
                        >Register Me</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterUser;