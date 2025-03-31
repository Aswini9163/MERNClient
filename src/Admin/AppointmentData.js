import axios from 'axios';
import React, { useEffect, useState } from 'react'
import  '../InnerFolders/BookAppointment'
import { NavLink } from 'react-router-dom';

const AppointmentData = () => {
  const [data , setData] = useState([]);
  const [status, setStatus] = useState("pending");
  useEffect(()=>{
    axios.get(`https://mern-9a42.onrender.com/bookappointments`)
    .then(res=>{
    //console.log(res)
    setData(res.data)
    })
    .catch(err=>{
      console.log(err)
      })
  },[])
  
  return (
   <section>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className='table-responsive'>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>T.Name</th>
                  <th>D.Name</th>
                  <th>P.Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((aid)=>{
                    return(
                      <tr key={aid._id}>
                        <td>{aid.tname}</td>
                        <td>{aid.dname}</td>
                        <td>{aid.pname}</td>
                        <td>{aid.bdate}</td>
                        <td>{aid.btime}</td>
                        <td>{aid.phone}</td>
                        <td>{aid.email}</td>
                        <td>{aid.subject}</td>
                        <td>{aid.message}</td>
                        <td>{aid.status1}</td>
                        <td>
                         <NavLink to={`/editappointment/${aid._id}/${status}`}>

                            <button className='btn btn-primary'>Edit</button>
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
  )
}

export default AppointmentData