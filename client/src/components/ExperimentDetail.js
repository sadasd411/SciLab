import React, { useEffect, useState } from 'react'
import{Link, navigate} from '@reach/router';
import axios from 'axios';
import Navigator from './Navigator';

const ExperimentDetail = (props) => {
    const [experiment, setExperiment] = useState({});
    console.log(props);

    useEffect(() => {
            axios.get("http://localhost:8000/api/experiments/" + props.id)
                .then(res =>{
                    console.log("res.data: ", res.data)
                    setExperiment(res.data)
                } )
        }, []);

    return (
        <div>
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                {/* <p>
                    <Link className="create-new" to = "/experiments/allExperiments" >back to Home</Link>
                </p> */}
                <h5 style={{color: "orange"}}>Experiment Details</h5>
                <table>
                    <tr className="trDetails">
                        <td className="tdDetails">Experiment #:</td>
                        <td className="tdDetails">{experiment.experimentNumber}</td>
                    </tr>
                    <tr>
                        <td>Experiment Name:</td>
                        <td>{experiment.experimentName}</td>
                    </tr>
                    <tr>
                        <td>Start Date:</td>
                        <td>{experiment.startDate}</td>
                    </tr>
                    <tr>
                        <td>Objective:</td>
                        <td>{experiment.objective}</td>
                    </tr>
                    <tr>
                        <td>Responsible Person:</td>
                        <td>{experiment.responsibleUser}</td>
                    </tr>
                    <tr>
                        <td>Instruments Required:</td>
                        <td>{experiment.instrumentsRequired}</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>{experiment.status}</td>
                    </tr>
                    <tr>
                        <td>Procedure:</td>
                        <td>{experiment.procedure}</td>
                    </tr>
                    <tr>
                        <td>Results:</td>
                        <td>{experiment.results}</td>
                    </tr>
                </table>
                <button onClick={(e) => navigate(`/experiments/${experiment._id}/edit`)} className="editBtn">Edit</button>
                {/* <div>
                    <FileUpload />
                </div> */}
            </div>
        </div>
    )
}
export default ExperimentDetail;