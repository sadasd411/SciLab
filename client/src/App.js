
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
import FileUpload from './components/FileUpload';
import ProcNew from './components/ProcNew';
import ProcAll from './components/ProcAll';
import ProcDetail from './components/ProcDetail';
import ProcEdit from './components/ProcEdit';

import ReportNew from './components/ReportNew';
import ReportEdit from './components/ReportEdit';
import ReportAll from './components/ReportAll';
import ReportDetails from './components/ReportDetails';


import Dashboard from './components/Dashboard';
import AllProcedures from './components/ProcedureList';
import EditProcedure from './components/ProcedureEdit';
import CreateProcedure from './components/ProcedureNew';
import ProcedureDetail from './components/ProcedureDetail';


// import AllReports from './components/AllReportsShane';
// import CreateReport from './components/CreateReport';


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
        <Dashboard default path ="/dashboard"></Dashboard>
        <AllProcedures path ="/procedures/allProcedures"/>
        <EditProcedure path ="/procedures/:id/edit"/>
        <CreateProcedure path = "/procedures/new" /> 
        <ProcedureDetail path = "/procedures/:id"/>
        <AllExperiments path = "/experiments/allExperiments" />
        <CreateExperiment path = "/experiments/new" /> 
        <ExperimentDetail path = "/experiments/:id"/>  
        <EditExperiment path = "/experiments/:id/edit" />
        <DeleteExperiment path = "/experiments/:id/delete" />
        <RegisterUser path = "/register" />
        <Login path="/login" setUser = {setUser}/> 
        {/* <AllReports path = "/reports/allReports" />
        <CreateReport path = "/reports/new" /> */}

        <ProcNew path = "/procs/new" />
        <ProcAll path = "/procs/allProcs" />
        <ProcDetail path = "/procs/:id/" />
        <ProcEdit path = "/procs/:id/edit" />

        <ReportNew path = "/reports/new" />
        <ReportEdit path = "/reports/:id/edit" />
        <ReportAll path = "/reports/allReports" />
        <ReportDetails path = "/reports/:id/" />

      </Router>
    </div>
    
  );
}

export default App;
