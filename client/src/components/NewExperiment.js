import React,{useEffect,useState} from 'react';
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const NewExperiment = (props) => {

        const [ curUserName, setCurUserName ] = useState(localStorage.getItem('curUserName'));
        const [ curUserEmail, setCurUserEmail ] = useState(localStorage.getItem('curUserEmail'))

        const [experimentName, setExperimentName] = useState("");
        const [startDate, setStartDate] = useState("");
        const [experimentNumber, setExperimentNumber] = useState("");
        const [objective, setObjective] = useState("");
        const [responsibleUser, setResponsibleUser] = useState("");
        const [instrumentsRequired, setInstrumentsRequired] = useState("");
        const [status, setStatus] = useState("");
        const [procedure, setProcedure] = useState("");
        const [results, setResults] = useState("");
        

        const [errors, setErrors] = useState("");
        console.log(props);

        const allInstruments = [
            "Ammeter",
            "Digital Scale",
            "Multimeter",
            "Oscilloscope",
            "Vernier Caliper",
            "Voltmeter",
        ]
        
        const allStatus = [
            "New Request",
            "In Queue",
            "In Process",
            "Completed"
        ]

        const allProcedures = [
            "Proc A",
            "Proc B",
            "Proc C"
        ]
        const  onSubmitHandler = e => {
            e.preventDefault();

            const newExperiment = {
                experimentName,
                startDate,
                experimentNumber,
                objective,
                responsibleUser,
                instrumentsRequired,
                status,
                procedure,
                results
            }

            axios.post('http://localhost:8000/api/experiments/', newExperiment)
                .then((res) => {
                    console.log("res: ", res);
                    navigate("/experiments/" + res.data._id);
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
                <div  className ="divInline">
                    <p className="linkToRight"><Link to ={"/"}>back to home</Link></p>
                </div>
                <div>
                    <h3 style={{color: "orange"}}>Create a new Experiment</h3>
                    <form className="divBorder" onSubmit={(e) => onSubmitHandler(e)}>
                        <div>
                            <label className = "experiment-lbl" >Experiment Name:</label>
                            {
                                errors.experimentName ? <span className="error-text">{errors.experimentName.message}</span> : null
                            }
                            {
                                experimentName.length < 3 && experimentName.length > 0
                                    ? <span className="error-text">Experiment name should be at least 3 characters</span>
                                    : null
                            }
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "experimentName"
                                value = {experimentName}
                                onChange= {(e) => setExperimentName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Start Date:</label>
                            {
                                errors.startDate ? <span className="error-text">{errors.startDate.message}</span> : null
                            }
                            {
                                startDate.length < 6 && startDate.length > 0
                                    ? <span className="error-text">Please enter date in the correct format:  MM/DD/YY</span>
                                    : null
                            }
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "startDate"
                                value = {startDate}
                                onChange= {(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Experiment Number:</label>
                            {
                                errors.experimentNumber ? <span className="error-text">{errors.experimentNumber.message}</span> : null
                            }
                            {
                                experimentNumber.length < 5 && experimentNumber.length > 0
                                    ? <span className="error-text">Experiment Number must have at least 5 characters</span>
                                    : null
                            }
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "experimentNumber"
                                value = {experimentNumber}
                                onChange= {(e) => setExperimentNumber(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Objective:</label>
                            {
                                errors.objective ? <span className="error-text">{errors.objective.message}</span> : null
                            }
                            <br/>
                            <textarea className = "experiment-textarea" rows="2" cols="48" wrap="soft" value={objective} onChange = {(e) => setObjective(e.target.value)}> 
                            </textarea>
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Responsible Person:</label>
                            {
                                errors.responsibleUser ? <span className="error-text">{errors.responsibleUser.message}</span> : null
                            }
                            <br/>
                            <input className = "experiment-input"  
                                type = "text"
                                name = "responsibleUser"
                                value = {responsibleUser}
                                onChange= {(e) => setResponsibleUser(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Instruments Requred:</label>
                            {
                                errors.instrumentsRequired ? <span className="error-text">{errors.instrumentsRequired.message}</span> : null
                            }
                            {/* {
                                instrumentsRequired.length  === 0
                                    ? <span className="error-text">Please select at least 1 instrument</span>
                                    : null
                            } */}
                            <br/>
                            <select className = "experiment-input"  
                                name = "instrumentsRequired"
                                checked = {instrumentsRequired}                       // changed 'value' to 'checked'
                                onChange= {(e) => setObjective(e.target.value)}
                            >
                                <option value = "" ></option>
                                {
                                    allInstruments.map((instrumentType, index) => (
                                        <option value = {instrumentType} key={index}>{instrumentType}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Status:</label>
                            {
                                errors.status ? <span className="error-text">{errors.status.message}</span> : null
                            }
                            {/* {
                                status.length  === 0
                                    ? <span className="error-text">Please select a status</span>
                                    : null
                            } */}
                            <br/>
                            <select className = "experiment-input"  
                                name = "status"
                                checked = {status}
                                onChange= {(e) => setStatus(e.target.value)}
                            >
                                <option value = ""></option>
                                {
                                    allStatus.map((statusType, index) => (
                                        <option value = {statusType} key={index}>{statusType}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Procedure:</label>
                            {
                                errors.procedure ? <span className="error-text">{errors.procedure.message}</span> : null
                            }
                            {/* {
                                status.length  === 0
                                    ? <span className="error-text">Please select a status</span>
                                    : null
                            } */}
                            <br/>
                            <select className = "experiment-input"  
                                name = "procedure"
                                checked = {procedure}
                                onChange= {(e) => setProcedure(e.target.value)}
                            >
                                <option value = ""></option>
                                {
                                    allProcedures.map((procedureType, index) => (
                                        <option value = {procedureType} key={index}>{procedureType}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label className = "experiment-lbl" >Results:</label>
                            {
                                errors.results ? <span className="error-text">{errors.results.message}</span> : null
                            }
                            <br/>
                            <textarea className = "experiment-textarea" rows="2" cols="48" wrap="soft" value={results} onChange = {(e) => setResults(e.target.value)}> 
                            </textarea>
                        </div>

                        <div align="left">
                            <button type ="submit">Add Experiment</button>
                        </div>
                    </form>
                </div>
            </div>
        )
}
export default NewExperiment;