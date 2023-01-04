
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
import Navigator from './Navigator';

const ReportNew = () => {
    const [reportType, setReportType] = useState("");
    const [expNum, setExpNum] = useState("");
    const [reportDesc, setReportDesc] = useState("");
    const [error, setErrors] = useState("");

    const SubmitHandler = (e) => {
        e.preventDefault();

        const newReport = {
            reportType,
            expNum,
            reportDesc,
        }

        axios.post("http://localhost:8000/api/reports/new", newReport)
            .then((res) => {
                console.log(res);
                navigate("/reports/allReports");
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
                <h4>Create a new Report</h4>
                <form>
                    <p>
                        <label>Report Type:</label>
                        <input 
                            type = "text"
                            name = "reportType"
                            value = {reportType}
                            onChange = {(e) => setReportType(e.target.value)}
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
                        <label className = "experiment-lbl" >Report Description:</label>
                        <input className = "experiment-input" 
                            type = "text"
                            name = "reportDesc"
                            value = {reportDesc}
                            onChange = {(e) => setReportDesc(e.target.value)}
                        />
                    </p>
                    <button type = "submit" className="editBtn" onClick={(e) => SubmitHandler(e)}>Add Report</button>
                </form>
            </div>
        </div>
    )
}

export default ReportNew;