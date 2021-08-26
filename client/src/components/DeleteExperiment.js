
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const DeleteExperiment = (props) => {
    const {experimentId, afterDelete} = props;

    const deleteHandler = () => {
        console.log("delete id: ", experimentId);
        axios.delete("http://localhost:8000/api/experiments/" + experimentId)
            .then((res) => {
                console.log("experiment deleted");
                console.log(res.data);
                afterDelete(experimentId);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <button className = "deleteBtn" onClick = {(e) => deleteHandler()}>Delete</button>
    )
}

export default DeleteExperiment;
