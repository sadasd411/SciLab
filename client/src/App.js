
import './App.css';
import { Router } from '@reach/router';
import {useState} from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import Header from './components/Header';
import List from './components/List';
import Update from './components/Update';
import ExperimentDetail from './components/ExperimentDetail';
import CreateExperiment from './components/CreateExperiment';
import EditExperiment from './components/EditExperiment';
import AllExperiments from './components/AllExperiments';
import DeleteExperiment from './components/DeleteExperiment';
import AllReports from './components/AllReports';
import CreateReport from './components/CreateReport';


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
        <AllReports path = "/reports/allReports" />
        <CreateReport path = "/reports/new" />

      </Router>
    </div>
    
  );
}

export default App;
