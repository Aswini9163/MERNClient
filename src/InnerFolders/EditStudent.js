import React, { useEffect, useState } from "react";
import innerStyle from './Innerpage.module.css'
import axios from 'axios';
import {NavLink} from 'react-router-dom';


const EditStudent = ()=>{
  const [stu, setStu] = useState([]);
  useEffect(()=>{
    axios.get(`https://mern-9a42.onrender.com/user`)
    .then(res => {
       //console.log(res.data)
       setStu(res.data)
    })
    .catch((err)=>{
        console.log(err);
    })
  })
   
    return(
            <main>
                <section className={innerStyle.bread}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Edit Student</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-12 m-auto">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Address</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                                stu.map((student)=>{
                                                    return(
                                                        <tr key={student._id}>
                                                            <td>{student.name}</td>
                                                            <td>{student.email}</td>
                                                            <td>{student.phone}</td>
                                                            <td>{student.address}</td>
                                                            <td>
                                                                <NavLink to={`/studentedit/${student._id}`}>
                                                                <button className="btn btn-primary" >Edit</button>
                                                                </NavLink>
                                                            </td>
                                                            
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>

                                </div>
                              
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default EditStudent;