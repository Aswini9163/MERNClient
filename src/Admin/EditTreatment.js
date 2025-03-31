import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import innerStyle from '../InnerFolders/Innerpage.module.css';
import axios from 'axios';

const EditTreatment = () => {
    const {ttname} = useParams();
    const [tname, setTname] = useState("");
    const [tdesc, setTdesc] = useState("");
    const navigate =  useNavigate();
    useEffect(()=>{
        axios.get(`https://mern-9a42.onrender.com/treatment/${ttname}`)
        .then((res)=>{
           //console.log(res.data)
           setTname(res.data.tname)
           setTdesc(res.data.tdesc)
        })
        .catch((err)=>{
            console.log(err)
            })
    },[])
  const EditTreatmentData =(e)=>{
    e.preventDefault();
    axios.put(`https://mern-9a42.onrender.com/treatment/${ttname}`,{tname , tdesc})
    .then((res)=>{
       alert("Treatment updated succ..");
       navigate("/admindashboard/deletetreatment")
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
                                   <h1>Edit Treatment</h1>
                               </div>
                           </div>
                       </div>
                   </section>
                    <section className='py-5'>
                                       <div className="container">
                                           <div className="row">
                                               <div className="col-md-5 m-auto">
                                                   <form className={innerStyle.bx_shadow} onSubmit={EditTreatmentData}>
                                                                <input type="text" name="name" placeholder="T.Name" value={tname} className="form-control mb-4"onChange={(e)=>setTname(e.target.value)}/>
                                                                <textarea type="text" name="description" placeholder="T.Description"value={tdesc} className="form-control mb-4"onChange={(e)=>setTdesc(e.target.value)}></textarea>
                                                                <input type="submit" value="Edit Treatment"/>
                                                   </form>                                               
                                               </div>
                                           </div>
                                       </div>
                       </section>
                   </main>
  )
}

export default EditTreatment