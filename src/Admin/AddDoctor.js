import React, { useState } from 'react'
import innerStyle from "../InnerFolders/Innerpage.module.css" 
import axios from 'axios';


const AddDoctor = () => {
    const [tname, setTname] = useState();
    const [dname, setDname] = useState();
    const [exp , setExp] = useState();
    const [qualification , setQualification] = useState();
    const [phone ,setPhone]= useState();
    const [address , setAddress] = useState();
 const AddDoctorData = (e) => {
  e.preventDefault();
  axios.post(`https://mern-9a42.onrender.com/doctor`,{tname , dname, exp, qualification, phone, address})
  .then((res)=>{
    alert('Doctor added succ..');
    setTname('')
      setDname('')
      setExp('')
      setQualification('')
      setPhone('')
      setAddress('')
  })
  .catch((err)=>{
    console.log(err)
    })

 }
   
  return (
    <section>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-6">
                                <form className={innerStyle.bx_shadow} onSubmit={AddDoctorData}>
                                           <div className=' mb-4'>
                                             <input type="text" name="name" placeholder="T.Name" value={tname} className="form-control"onChange={(e)=>setTname(e.target.value)}/>
                                           </div>
                                           <div className=' mb-4'>
                                             <input type="text" name="dname" placeholder="D.Name"value={dname} className="form-control"onChange={(e)=>setDname(e.target.value)}/>
                                           </div>
                                           <div className=' mb-4'>
                                             <input type="text" name="exp" placeholder="Experience" value={exp} className="form-control"onChange={(e)=>setExp(e.target.value)}/>
                                           </div>
                                           <div className=' mb-4'>
                                             <input type="text" name="qulification" placeholder="Qualification"value={qualification} className="form-control"onChange={(e)=>setQualification(e.target.value)}/>
                                           </div>
                                           <div className=' mb-4'>
                                             <input type="text" name="phone" placeholder="Phone"value={phone} className="form-control"onChange={(e)=>setPhone(e.target.value)}/>
                                           </div>
                                           <div className=' mb-4'>
                                             <input type="text" name="address" placeholder="Address"value={address} className="form-control"onChange={(e)=>setAddress(e.target.value)}/>
                                           </div>
                                             <input type="submit" value="Add Doctor"/>
                                </form>                                               
                            </div>
                        </div>
                    </div>
    </section>
  )
}

export default AddDoctor;