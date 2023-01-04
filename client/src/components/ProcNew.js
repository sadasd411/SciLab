
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Navigator from './Navigator';

const ProcNew = () => {
    const [procName, setProcName] = useState("");
    const [expNum, setExpNum] = useState("");
    const [procDesc, setProcDesc] = useState("");
    const [error, setErrors] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newProc = {
            procName,
            expNum,
            procDesc,
        }

        axios.post("http://localhost:8000/api/procs/new", newProc)
            .then((res) => {
                console.log(res);
                navigate("/procs/allProcs");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                <h4>Create a new Procedure</h4>
                <form>
                    <p>
                        <label>Procedure Name:</label>
                        <input 
                            type = "text"
                            name = "procName"
                            value = {procName}
                            onChange = {(e) => setProcName(e.target.value)}
                        />
                    </p>
                    <p>
                        <label>Experiment#:</label>
                        <input 
                            type = "text"
                            name = "expNum"
                            value = {expNum}
                            onChange = {(e) => setExpNum(e.target.value)}
                        />
                    </p>
                    <p>
                        <label className = "experiment-lbl" >Procedure Name:</label>
                        <input className = "experiment-input" 
                            type = "text"
                            name = "procDesc"
                            value = {procDesc}
                            onChange = {(e) => setProcDesc(e.target.value)}
                        />
                    </p>
                    <button type = "submit" className="editBtn" onClick={(e) => SubmitHandler(e)}>Add Procedure</button>
                </form>
            </div>
        </div>
    )
}

export default ProcNew;