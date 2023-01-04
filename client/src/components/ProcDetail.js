
import React, { useEffect, useState } from 'react'
import{Link, navigate} from '@reach/router';
import axios from 'axios';
import Navigator from './Navigator';

const ProcDetail = (props) => {
    const [proc, setProc] = useState({});
    console.log(props);

    useEffect(() => {
            axios.get("http://localhost:8000/api/procs/" + props.id)
                .then(res =>{
                    console.log("res.data: ", res.data)
                    setProc(res.data)
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
                <h5 style={{color: "orange"}}>Procedure Details</h5>
                <table>
                    <tr className="trDetails">
                        <td className="tdDetails">Procedure Name:</td>
                        <td className="tdDetails">{proc.procName}</td>
                    </tr>
                    <tr>
                        <td>Experiment #:</td>
                        <td>{proc.expNum}</td>
                    </tr> 
                    <tr>
                        <td>Procedure Description:</td>
                        <td>{proc.procDesc}</td>
                    </tr>                
                </table>
                <button onClick={(e) => navigate(`/procs/${proc._id}/edit`)} className="editBtn">Edit</button>
                {/* <div>
                    <FileUpload />
                </div> */}
            </div>
        </div>
    )
}
export default ProcDetail;