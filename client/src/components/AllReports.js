import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Navigator from './Navigator';


const AllReports = (props) => {
    const [ AllReports, setAllReports ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/reports/allReports/")
            .then((res) => {
                console.log(res);
                setAllReports(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <div className="leftNav">
                <Navigator />
                {/* {
                    curUserEmail === "admin@scilab.com"
                    ? <NavigatorAdmin />
                    : <Navigator />
                } */}
            </div>
            <div className="centerPage">
                <p className="firstBoxAll">
                    <Link to = "/reports/new">New Report</Link>
                </p>
                <h5 style={{color: "orange"}}>All Reports</h5>
                <br/>
                <table className="tableAll">
                    <tbody>
                        <tr>
                            <td>First Name
                                {
                                    AllReports.map((report, index) => (
                                        <div key={index}>
                                            {report.firstName}
                                        </div>
                                    ))
                                }
                            </td>
                            <td>Last Name
                                {
                                    AllReports.map((report, index) => (
                                        <div key={index}>
                                            {report.lastName}
                                        </div>
                                    ))
                                }
                            </td>
                            <td>Email
                                {
                                    AllReports.map((report, index) => (
                                        <div key={index}>
                                            {report.email}
                                        </div>
                                    ))
                                }
                            </td>
                            <td>Actions
                                {
                                    AllReports.map((report, index) => (
                                        <div key={index}>
                                            <Link to={"/AllReports/" + report._id + "/edit/"}>{report.edit}</Link>
                                            <Link to={"/AllReports/" + report._id + "/delete/"}>{report.delete}</Link>
                                        </div>
                                    ))
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        )
}

export default AllReports;