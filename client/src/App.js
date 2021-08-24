
import './App.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Header from './components/Header';
import List from './components/List';
import Update from './components/Update';
import Detail from './components/Details';
import NewExperiment from './components/NewExperiment';
import { Router } from '@reach/router';
import {useState} from 'react';


function App() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [ curUserName, setCurUserName ] = useState(localStorage.getItem('curUserName'));
  const [ curUserEmail, setCurUserEmail ] = useState(localStorage.getItem('curUserEmail'));


  return (
    <div className="App">
      {/* <Header></Header>
      <List></List> */}
      <Header></Header>
      <Router>
        
        <List path ="/home" />
        {/* allExperiments path = "/experiments" */}
        <NewExperiment path = "/experiments/new" /> 
        <Detail path ="/experiments/:id"/>  
        <Update path ="/experiments/:id/edit"/> 
        <RegisterUser path = "/register" />
        <Login path="/login" setUser = {setUser}/> 
      </Router>
    </div>
    
  );
}

export default App;
