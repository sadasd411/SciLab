import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'
import Navigator from './Navigator';

const Dashboard = (props) => {
    const [allExperiments, setAllExperiments] = useState([]);
    
    
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
            setAllExperiments(res.data);
           
                   })
        .catch((err) =>
        console.log(err));
    },[]);
    
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
                <table>
                    <thead>
                    <th>Experiment Name </th>
                    <th>Experiment Staus</th>
                    </thead>
                    <tbody>
                    { allExperiments.map((experiment,index) => (
                        <tr >
                            <td>
                            <Link to ={`/experiments/${experiment._id}`}>{experiment.experimentName} </Link>
                             </td>
                             <td>
                                 {experiment.allStatus}
                              {/* {experiment.experimentDescription} */}
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
