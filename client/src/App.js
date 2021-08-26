
import './App.css';
import Header from './components/Header'
import { Router } from '@reach/router';
import {useState} from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import ExperimentDetail from './components/ExperimentDetail';
import CreateExperiment from './components/CreateExperiment';
import EditExperiment from './components/EditExperiment';
import AllExperiments from './components/AllExperiments';
import DeleteExperiment from './components/DeleteExperiment';



function App() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState({});
  const [ curUserName, setCurUserName ] = useState(localStorage.getItem('curUserName'));
  const [ curUserEmail, setCurUserEmail ] = useState(localStorage.getItem('curUserEmail'));


  return (
    <div className="App">
      <Header />
      <Router>
        
        {/* <List path ="/home" /> */}
        <MainPage default path = "/experiments" />
        <AllExperiments path = "/experiments/allExperiments" />
        <CreateExperiment path = "/experiments/new" /> 
        <ExperimentDetail path = "/experiments/:id"/>  
        <EditExperiment path = "/experiments/:id/edit" />
        <DeleteExperiment path = "/experiments/:id/delete" />
        <RegisterUser path = "/register" />
        <Login path="/login" setUser = {setUser}/> 

      </Router>
    </div>
    
  );
}

export default App;
