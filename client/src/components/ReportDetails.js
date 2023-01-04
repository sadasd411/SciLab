

import React, { useEffect, useState } from 'react'
import{Link, navigate} from '@reach/router';
import axios from 'axios';
import Navigator from './Navigator';

const ReportDetail = (props) => {
    const [report, setReport] = useState({});
    console.log(props);

    useEffect(() => {
            axios.get("http://localhost:8000/api/reports/" + props.id)
                .then(res =>{
                    console.log("res.data: ", res.data)
                    setReport(res.data)
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
                <h5 style={{color: "orange"}}>Report Details</h5>
                <table>
                    <tr className="trDetails">
                        <td className="tdDetails">Report Type:</td>
                        <td className="tdDetails">{report.reportType}</td>
                    </tr>
                    <tr>
                        <td>Experiment #:</td>
                        <td>{report.expNum}</td>
                    </tr> 
                    <tr>
                        <td>Report Description:</td>
                        <td>{report.reportDesc}</td>
                    </tr>                
                </table>
                <button onClick={(e) => navigate(`/reports/${report._id}/edit`)} className="editBtn">Edit</button>
                {/* <div>
                    <FileUpload />
                </div> */}
            </div>
        </div>
    )
}
export default ReportDetail;