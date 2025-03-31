import React, { useState } from "react";
import innerStyle from './Innerpage.module.css'
import axios from 'axios';


const AddStudent = ()=>{
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const addStudent = (e) => {
        e.preventDefault();
        //console.log(name,email,phone,address)
        axios.post(`http://localhost:4000/user`,{name,email,phone,address})
        .then((res)=>{
            alert("user added succ...");
            setName("");
            setPhone("");
            setEmail("");
            setAddress("");
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
                                <h1>Add Student</h1>
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
                                             <input type="text" name="phone" placeholder="Phone" value={phone}className="form-control mb-4"onChange={(e)=>setPhone(e.target.value)}/>
                                             <input type="text" name="address" placeholder="Address"value={address} className="form-control mb-4"onChange={(e)=>setAddress(e.target.value)}/>
                                             <input type="submit" value="Add Student"/>
                                           </form>                                               
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

export default AddStudent;