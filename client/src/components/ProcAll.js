
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Navigator from './Navigator';
// import ProcDelete from './ProcDelete';

const ProcAll = (props) => {
    const [allProcs, setAllProcs] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/procs/allProcs")
            .then((res) => {
                console.log(res);
                setAllProcs(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const updateAfterDelete = (deletedProcId) => {
        let filteredProcsArray = 
            allProcs.filter((procObj) => {
                return procObj._id !== deletedProcId
            })
            setAllProcs(filteredProcsArray);
    }

    return (
        <div>
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                <h4 style={{color: "orange"}}>All Procedures</h4>
                <table>
                    <thead>
                        <th>Proc. Name</th>
                        <th>Exp Name</th>
                        <th>Proc. Description</th>
                    </thead>
                    <tbody>
                        {
                            allProcs.map((proc, index) => (                                 
                                <tr key = {index} >
                                    <td className = "trLink">
                                        <Link to={"/procs/" + proc._id}>{proc.procName}</Link>
                                    </td>
                                    <td>
                                        {proc.expNum}
                                    </td>
                                    <td>
                                        {proc.procDesc}
                                    </td>
                                    <td>
                                        {/* <ProcDelete prodId = {proc._id} afterDelete = {updateAfterDelete} /> */}
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

export default ProcAll;