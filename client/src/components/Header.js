//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';


const Header = (props) => {
  const {user} = props;
  console.log("user: ", user);

  const [ curUserName, setCurUserName ] = useState(localStorage.getItem('curUserName'));
  const [ curUserEmail, setCurUserEmail ] = useState(localStorage.getItem('curUserEmail'))
    const {dbName  } = props;
    useEffect(() => {
        
    },[curUserName])

    const logout = (e) => {
      e.preventDefault();
      localStorage.clear();
      navigate("/experiments/allExperiments"); 
    };
  return (
      <div className="header">
          <div className= "headerBanner">
            <h1><span style={{color: "orange"}}>Sci</span>Lab</h1>
          </div>
          <div className="headerNav">
            <p>
              <Link className="headerLinks" to="/experiments/allExperiments">Home</Link> 
              <Link className="headerLinks" to="/register">Create Account</Link> 
              <Link className="headerLinks" to="/login">Login</Link> 
              <Link className="headerLinks" to="/logout" onClick={(e)=> logout(e)}>Logout</Link> 
            </p>
          </div>       
      </div>  
  );
}

export default Header;