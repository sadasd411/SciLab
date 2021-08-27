import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreateReport = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ selectExperiment , setSelectExperiment ] = useState("");
    const [ type, setType ] = useState("");
    const [ errors, setErrors ] = useState({});
    console.log("props: ", props);

    const allSelectExperiment = [
        "Experiment #1",
        "Experiment #2",
        "Experiment #3",
        "Experiment #4",
        "Experiment #5",
        "Experiment #6",
        "Experiment #7",
        "Experiment #8",
        "Experiment #9",
    ]

    const allType = [
        "PDF",
        "DOC",
        "HTML",
    ]

    const  onSubmitHandler = e => {
        e.preventDefault();

        const newReport = {
            firstName,
            lastName,
            selectExperiment,
            type,
        }

        axios.post('http://localhost:8000/api/reports/new', newReport)
        .then((res) => {
            console.log("res: ", res);
            navigate("/reports/allReports");
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
            <div className="firstBoxCreate">
                <p><Link to = "/reports/allReports">Back to All Reports</Link></p>
            </div>
            <div>
                <h5 style={{color: "orange"}}>Create a New Report</h5>
                <form className="middleBoxCreate" onSubmit={(e) => onSubmitHandler(e)}>
                    <div>
                        <label>First Name:</label>
                        {
                            errors.firstName ? <span className="error-text">{errors.firstName.message}</span> : null
                        }
                        {
                            firstName.length < 2 && firstName.length > 0
                                ? <span className="error-text">First Name should be at least 2 characters</span>
                                : null
                        }
                        <input className = "inputCreate"  
                            type = "text"
                            name = "firstName"
                            value = {firstName}
                            onChange= {(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        {
                            errors.lastName ? <span className="error-text">{errors.lastName.message}</span> : null
                        }
                        {
                            lastName.length < 2 && lastName.length > 0
                                ? <span className="error-text">Last Name should be at least 2 characters</span>
                                : null
                        }
                        <input className = "inputCreate"  
                            type = "text"
                            name = "lastName"
                            value = {lastName}
                            onChange= {(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Select Experiment:</label>
                        {
                            errors.selectExperiment ? <span className="error-text">{errors.selectExperiment.message}</span> : null
                        }
                        <select className = "inputCreate"  
                            name = "selectExperiment"
                            checked = {selectExperiment}                  
                            onChange= {(e) => setSelectExperiment(e.target.value)}
                        >
                            <option value = "" ></option>
                            {
                                allSelectExperiment.map((selectExperimentType, index) => (
                                    <option value = {selectExperimentType} key={index}>{selectExperimentType}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label>Type:</label>
                        {
                            errors.type ? <span className="error-text">{errors.type.message}</span> : null
                        }
                        <select className = "inputCreate"  
                            name = "type"
                            checked = {type}                  
                            onChange= {(e) => setType(e.target.value)}
                        >
                            <option value = "" ></option>
                            {
                                allType.map((typeType, index) => (
                                    <option value = {typeType} key={index}>{typeType}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="buttonCreate">
                        <button type ="submit">Create Report</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateReport;