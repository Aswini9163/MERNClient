import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import innerStyle from './Innerpage.module.css';
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StudentEdit = () => {
    const {sid} = useParams();
     const [name, setName] = useState("");
        const [phone, setPhone] = useState("");
        const [email, setEmail] = useState("");
        const [address, setAddress] = useState("");
        const navigate = useNavigate();

        useEffect(()=>{
            axios.get(`https://mern-9a42.onrender.com/user/${sid}`)
            .then((res)=> {
                //console.log(res)
                setName(res.data.name);
                setPhone(res.data.phone);
                setEmail(res.data.email);
                setAddress(res.data.address);
            })
            .catch((err)=>{
                console.log(err)
            })
        },[])
        const editStudentData =(e) =>{
            e.preventDefault();
            axios.put(`https://mern-9a42.onrender.com/user/${sid}`, {name,email,phone,address})
            .then((res)=>{ 
                alert("studentinfo updated succ..")
                /*setName('')
                setPhone('')
                setEmail('')
                setAddress('')*/
                navigate('/editstudent')
            })
            .catch((err)=>{console.log(err)})
        }
    return (
                   <main>
                        <section className={innerStyle.bread}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1> Edit Student</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5">
                            <div className="container">
                                <div className="row ">
                                    <div className="col-md-4 m-auto">
                                           <form className={innerStyle.bx_shadow} onSubmit={editStudentData}>
                                             <input type="text" name="name" placeholder="Name" value={name} className="form-control mb-4"onChange={(e)=>setName(e.target.value)}/>
                                             <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                             <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                             <input type="text" name="address" placeholder="Address"value={address} className="form-control mb-4"onChange={(e)=>setAddress(e.target.value)}/>
                                             <input type="submit" value="Edit Student"/>
                                           </form>                                         
                                    </div>
                                </div>
                            </div>
                        </section>
                     </main>
    )
}

export default StudentEdit;