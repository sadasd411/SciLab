import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'
import Navigator from './Navigator';

const Dashboard = (props) => {
    const [allExperiments, setAllExperiments] = useState([]);
    const [allProcs, setAllProcs] = useState([]);  
    const [allReports, setAllReports] = useState([]);
    const [filteredProcsArray, setFilteredProcsArray] = useState([]);  
    
    const allStatus = [
        "New Request",
        "In Queue",
        "In Process",
        "Completed"
    ]

    useEffect(() =>{
        axios.get("http://localhost:8000/api/experiments/allExperiments")
        .then((res) =>{
            console.log(res.data)
            setAllExperiments(res.data.sort(((a, b) => (a.experimentName > b.experimentName) ? 1 : -1)));
        })
        .catch((err) =>
        console.log(err));
    },[]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/procs/allProcs")
            .then((res) => {
                console.log(res.data);
                setAllProcs(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/reports/allReports")
            .then((res) => {
                console.log(res.data);
                setAllReports(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    },[]);


    const filterProcs = (expNum) => {
        let filteredProcs = 
            allProcs.filter((procObj) => {
                return procObj.expNum === expNum;
            })
            console.log("filtered procs: ", filteredProcs);
        return filteredProcs;
    }

    const filterReports = (expNum) => {
        let filteredReports = 
            allReports.filter((reportObj) => {
                return reportObj.expNum === expNum;
            })
            console.log("filtered reports: ", filteredReports);
        return filteredReports;
    }
    
    return(       
        <div>
            <div>
                <div className = "leftNav">
                <Navigator />
                {/* {
                    curUserEmail === "admin@scilab.com"
                    ? <NavigatorAdmin />
                    : <Navigator />
                } */}
            </div>
            <div  className = "centerPage">
                <h4 style={{color: "orange"}}>In Dashboard</h4>
                <table>
                    <thead>
                    <th>Experiment Name </th>
                    <th>Status</th>
                    <th>Procedures</th>
                    <th>Reports</th>
                    </thead>
                    <tbody>
                        { allExperiments.map((experiment,index) => (
                            <tr >
                                <td>
                                <Link to ={`/experiments/${experiment._id}`}>{experiment.experimentName} </Link>
                                </td>
                                <td>
                                    {experiment.status}
                                {/* {experiment.experimentDescription} */}
                                </td>
                                <td>
                                    {
                                        filterProcs(experiment.experimentNumber).map((proc, index) => (
                                            <>
                                                <Link to={"/procs/" + proc._id}>
                                                    {proc.procName}
                                                </Link>
                                                {"  "}
                                            </>
                                        ))
                                    }       
                                </td> 
                                <td>
                                    {
                                        filterReports(experiment.experimentNumber).map((report, index) => (
                                            <>
                                                <Link to={"/reports/" + report._id}>
                                                    {report.reportType}
                                                </Link>
                                                {"  "}
                                            </>
                                        ))
                                    }       
                                </td>                                
                            </tr>
                        ))}                          
                    </tbody>
                </table>
                </div>
            </div>
        </div>)
}
export default Dashboard;
