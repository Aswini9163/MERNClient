import React, { useState } from "react";
import innerStyle from '../InnerFolders/Innerpage.module.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const Register = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const navigate = useNavigate();
    const addStudent = (e) => {
        e.preventDefault();
        //console.log(name,email,phone,address)
        axios.post(`https://mern-9a42.onrender.com/signup`,{name,email,password,phone,address})
        .then((res)=>{
            alert("Admin register succ...");
            navigate('/admin')
        })
        .catch((err)=>{
            console.log(err);
        })
        };
    
    return(
            <main>
                <section className={innerStyle.bread}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Admin Register</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 m-auto">
                                <form className={innerStyle.bx_shadow} onSubmit={addStudent}>
                                             <input type="text" name="name" placeholder="Name" value={name} className="form-control mb-4"onChange={(e)=>setName(e.target.value)}/>
                                             <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                             <input type="text" name="password" placeholder="Password" value={password}className="form-control mb-4"onChange={(e)=>setPassword(e.target.value)}/>
                                             <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                             <input type="text" name="address" placeholder="Address"value={address} className="form-control mb-4"onChange={(e)=>setAddress(e.target.value)}/>
                                             <input type="submit" value="Register"/>
                                           </form>                                               
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default Register;