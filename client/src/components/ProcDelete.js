

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DeleteProc = (props) => {
    const {procId, afterDelete} = props;

    const deleteHandler = () => {
        console.log("delete id: ", procId);
        axios.delete("http://localhost:8000/api/procs/" + procId)
            .then((res) => {
                console.log("proc deleted");
                console.log(res.data);
                afterDelete(procId);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <button className = "deleteBtn" onClick = {(e) => deleteHandler()}>Delete</button>
    )
}

export default DeleteProc;