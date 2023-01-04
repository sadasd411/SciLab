
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import Navigator from './Navigator';
// import ProcDelete from './ProcDelete';

const ReportAll = (props) => {
    const [allReports, setAllReports] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/reports/allReports")
            .then((res) => {
                console.log(res);
                setAllReports(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    const updateAfterDelete = (deletedReportId) => {
        let filteredReportsArray = 
            allReports.filter((reportObj) => {
                return reportObj._id !== deletedReportId
            })
            setAllReports(filteredReportsArray);
    }

    return (
        <div>
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                <h4 style={{color: "orange"}}>All Reports</h4>
                <table>
                    <thead>
                        <th>Report Type</th>
                        <th>Exp#</th>
                        <th>Report Description</th>
                    </thead>
                    <tbody>
                        {
                            allReports.map((report, index) => (             
                                <tr key={index}>
                                    <td className = "trLink">
                                        <Link to={"/reports/" + report._id}>{report.reportType}</Link>
                                    </td>
                                    <td>
                                        {report.expNum}
                                    </td>
                                    <td>
                                        {report.reportDesc}
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

export default ReportAll;