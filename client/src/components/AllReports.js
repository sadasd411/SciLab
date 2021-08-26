import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllReports = (props) => {
    const [ AllReports, setAllReports ] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/AllReports/")
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
            <button type ="submit">Create Report</button>
            <div>
                <h1>Experiment Report</h1>
                <table className="allReports">
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