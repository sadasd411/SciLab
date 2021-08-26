import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
import axios from 'axios'
import Navigator from './Navigator'

const ListAllProcedure = (props) => {
    const [allProcedures, setAllProcedures] = useState([]);
    
    
    

    useEffect(() =>{
        axios.get("http://localhost:8000/api/procedures/")
        .then((res) =>{
            console.log(res.data);
            setAllProcedures(res.data);
           
                   })
        .catch((err) =>
        console.log(err));
    },[]);
    
    return(
        
        <div>
            <div>
                {/* <button className="linkToRight"><Link to ={"/experiment"}>Add Experiment</Link></button> */}
                <div className = "leftNav">
                <Navigator />
                {/* {
                    curUserEmail === "admin@scilab.com"
                    ? <NavigatorAdmin />
                    : <Navigator />
                } */}
            </div>
            <div  className = "centerPage">
                <table>
                    <thead>
                    <th>Procedure Name </th>
                    <th>Actions avaiable</th>
                    </thead>
                    <tbody>
                    { allProcedures.map((procedure,index) => (
                        <tr>
                            <td>
                            {procedure.procedureName}
                             </td>
                             
                            <td>
                            <Link to ={`/procedure/${procedure._id}`}>details </Link>
                            <span>|</span>
                            <Link to ={`/procedures/${procedure._id}/edit`}> edit</Link>
                            <span>|</span>
                            <Link to ={`/procedure/`}> add</Link>
                            </td>
                        </tr>
                ))}
                            
                    </tbody>
                  </table>
                  </div>
            </div>
        </div>)
}
export default ListAllProcedure;
