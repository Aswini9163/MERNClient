import React, { useEffect, useState } from 'react';
import innerStyle from '../InnerFolders/Innerpage.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const EditAppointment = () => {
    const {appid,status} = useParams();
    const [status1, setStatus1] = useState(status || "");
    const [tname, setTname] = useState("");
    const [dname, setDname] = useState("");
    const [pname, setPname] = useState("");
    const [bdate, setBdate] = useState("");
    const [btime, setBtime] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
  
    useEffect(()=>{
        axios.get(`https://mern-9a42.onrender.com/bookappointments/${appid}`)
        .then((res)=>{
           //console.log(res.data)
           setTname(res.data.tname)
           setDname(res.data.dname)
           setPname(res.data.pname)
           setBdate(res.data.bdate)
           setBtime(res.data.btime)
           setPhone(res.data.phone)
           setEmail(res.data.email)
           setSubject(res.data.subject)
           setMessage(res.data.message)
        })
        .catch((err)=>{
            console.log(err)
            })
    },[])
    const EditAppointmentData =(e)=>{
        e.preventDefault();
        axios.put(`https://mern-9a42.onrender.com/bookappointments/${appid}`,{tname , dname, pname, bdate, btime, phone, email, subject,status1, message})
        .then((res)=>{
           alert("Appointment updated succ..");
           navigate("/admindashboard/appointmentdata")
           
          
         
        })
        .catch((err)=>{
            console.log(err)
            })
      }
  return (
    <main>
                           <section className={innerStyle.bread}>
                               <div className="container">
                                   <div className="row">
                                       <div className="col-md-12">
                                           <h1>Edit Appointment</h1>
                                       </div>
                                   </div>
                               </div>
                           </section>
                            <section className={`py-4 ${innerStyle.aboutus}`}>
                                                  <div className="container">
                                                      <div className="row my-3">
                                                       <div className="col-md-8 m-auto">
                                                           <form className={innerStyle.bx_shadow} onSubmit={EditAppointmentData}>
                                                               <div className='row'>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="tname" placeholder="T.Name"  className="form-control mb-4" value={tname} onChange={(e)=>setTname(e.target.value)}/>
                                                                            </div>
                                                                       </div>
                           
                                                                 
                                                            
                                                             
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="dname" placeholder="D.Name"  className="form-control mb-4" value={dname} onChange={(e)=>setDname(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="pname" placeholder="P.Name"  className="form-control mb-4"value={pname} onChange={(e)=>setPname(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="reversedate" name="bdate"  className="form-control mb-4"value={bdate} onChange={(e)=>setBdate(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="time" name="btime"  className="form-control mb-4"value={btime} onChange={(e)=>setBtime(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="phone" placeholder="Phone"  className="form-control mb-4"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="email" placeholder="Email"  className="form-control mb-4"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="subject"placeholder="Subject"className="form-control mb-4"value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="text" name="status1"placeholder="Status1"className="form-control mb-4"value={status1} onChange={(e)=>setStatus1(e.target.value)}/>
                                                                       </div>
                                                                    </div>
                                                                   <div className='col-md-12'>
                                                                       <div className='mb-4'>
                                                                            <textarea type="text" name="message" placeholder="Message"className="form-control mb-4"value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                                                       </div>
                           
                                                                   </div>
                                                                   <div className='col-md-6'>
                                                                       <div className='mb-4'>
                                                                            <input type="submit" value={'Edit Appointment'}/>
                                                                       </div>
                           
                                                                   </div>
                                                            </div>
                                                           </form>
                                                                                                                                     
                                                        </div>
                                                         
                                                      </div>
                                                  </div>
                                              </section>
                           </main>
  )
}

export default EditAppointment