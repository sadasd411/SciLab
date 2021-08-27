
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Navigator from './Navigator';
import DeleteExperiment from './DeleteExperiment';
import FileUpload from './FileUpload';

const AllExperiments = (props) => {
    const [ curUserName, setCurUserName ] = useState(localStorage.getItem('curUserName'));
    const [ curUserEmail, setCurUserEmail ] = useState(localStorage.getItem('curUserEmail'));

    const [allExperiments, setAllExperiments] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/experiments/allExperiments")
            .then((res) => {
                console.log(res);
                setAllExperiments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const updateAfterDelete = (deletedExperimentId) => {
        let filteredExperimentsArray = allExperiments.filter((experimentObj) => {
            return experimentObj._id !== deletedExperimentId;
        });
        setAllExperiments(filteredExperimentsArray);
    };

    return (
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
                <p className = "linkParagraph">
                    <Link className="create-new" to = "/experiments/new" >New Experiment</Link>
                    <Link className="create-new" to = "/experiments/new" >New Procedure</Link>
                    <Link className="create-new" to = "/experiments/new" >New Report</Link>
                </p>
                {/* <h4>All Experiments</h4> */}
                <table>
                    <thead>
                        <th>Exp #</th>
                        <th>Exp Name</th>
                        <th>Resp. Person</th>
                        <th>Status</th>
                        <th>.</th>
                    </thead>
                    <tbody>
                        {
                            allExperiments.map((experiment, index) => (  
                                <tr key={index}>
                                    <td>
                                        {experiment.experimentNumber}
                                    </td>
                                    <td>
                                        <Link to={"/experiments/" + experiment._id} >{experiment.experimentName}</Link>
                                    </td>
                                    <td>
                                        {experiment.responsibleUser}
                                    </td>
                                    <td>
                                        {experiment.status}
                                    </td>
                                    <td>
                                        <button className="editBtn" onClick={(e) => navigate("/experiments/" + experiment._id + "/edit")}>Edit</button>
                                        <DeleteExperiment experimentId = {experiment._id} afterDelete = {updateAfterDelete}/> 
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AllExperiments;
