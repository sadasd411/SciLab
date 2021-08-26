

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from '@reach/router';
import { Link, navigate } from '@reach/router';


const Navigator = (props) => {
    const {user} = props;
    const curUserName = localStorage.getItem('curUserName');
    const curUserEmail = localStorage.getItem('curUserEmail');

    return (
            <div className = "leftNav">
                <p className="welcome-p">
                    {curUserName ? "Welcome, " + curUserName + "!" : "Welcome!"} 
                </p>
                <p><Link className = "leftNavLinks" to="/experiments/allExperiments">Dashboard</Link></p>
                <p><Link className = "leftNavLinks" to="/projects/allProjects">Projects</Link></p>                
                <p><Link className = "leftNavLinks" to="/procedures/allProcedures">Procedures</Link></p>
                <p><Link className = "leftNavLinks" to="/reports/allReports">Reports</Link></p>
                {/* {curUserEmail==="admin@scilab.com" ? "/experiments/allExperiments" : "/experiments/filteredExperiments"} */}
            </div>
    )
}
export default Navigator;