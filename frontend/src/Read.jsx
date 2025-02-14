import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import moment from 'moment';

function Read(){
    const {id} =useParams();
    const [student, setStudent]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/read/'+id)
        .then(res=>{console.log(res)
        setStudent(res.data[0]);
    
    })
        .catch(err =>console.log(err));
    }, [])

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <div className="p-2">
            <h2>Student Detail</h2>
            <h2>{student.id}</h2>
            <h2>{student.Name}</h2>
            <h2>{student.Email}</h2>
            <h2>{student.MobileNo}</h2>
            <h2>{moment(student.DateofBirth).format('D MMM YYYY')}</h2>
            </div>
            <Link to="/" className="btn btn-primary me-2">Back</Link>
            <Link to={`/edit/${student.id}`} className="btn btn-info">Edit</Link>
            </div>
            </div>
    )
}

export default Read