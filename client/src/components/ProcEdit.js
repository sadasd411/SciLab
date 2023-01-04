

import React,{useEffect, useState} from 'react';
import{Link, navigate} from '@reach/router';
import axios from 'axios';
import Navigator from './Navigator';

const ProcEdit = (props) => {
        const {id} = props;

        const [procName, setProcName] = useState("");
        const [expNum, setExpNum] = useState("");
        const [procDesc, setProcDesc] = useState("");
        
        const [errors, setErrors] = useState({});
        console.log("props: ", props);

        useEffect (() => {
            axios.get("http://localhost:8000/api/procs/" + id)
                .then ((res) => {
                    console.log(res.data);
                    setProcName(res.data.procName);
                    setExpNum(res.data.expNum);
                    setProcDesc(res.data.procDesc);
                })
                .catch((err) => {
                    console.log(err);
                });
        },[]);

        const  onSubmitHandler = e => {
            e.preventDefault();

            const tempProc = {
                procName,
                expNum,
                procDesc,
            }

            axios.put('http://localhost:8000/api/procs/' + id, tempProc)
                .then((res) => {
                    console.log("res: ", res);
                    navigate("/procs/allProcs");
                })
                .catch((err) => {
                    console.log("err: ", err.response);
                    if(err.response.data.errors) {
                        setErrors(err.response.data.errors);
                    }
                });
                
        }
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
                <div className = "centerPage" >
                    <h5 style={{color: "orange"}}>Edit Procedure</h5>
                    <form className="divBorder" onSubmit={(e) => onSubmitHandler(e)}>
                        <div>
                            <label className = "experiment-lbl" >Procedure Name:</label>
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "procName"
                                value = {procName}
                                onChange= {(e) => setProcName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Experiment#:</label>
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "expNum"
                                value = {expNum}
                                onChange= {(e) => setExpNum(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Procedure Description:</label>
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "procDesc"
                                value = {procDesc}
                                onChange= {(e) => setProcDesc(e.target.value)}
                            />
                        </div>
                        <div align="left">
                            <button className = "updateBtn" type ="submit">Update Procedure</button>
                        </div>
                    </form>
                </div>
            </div>
        )
}
export default ProcEdit;