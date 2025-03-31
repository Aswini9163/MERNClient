import React, { useContext, useState } from "react";
import innerStyle from '../InnerFolders/Innerpage.module.css';
import axios from 'axios';
import { NavLink, useNavigate } from "react-router-dom";
import { Store } from "../App";


const Admin = ()=>{

   const [token, setToken] = useContext(Store);  //token is empty
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   const navigate = useNavigate();


    const addStudent = (e) => {
        e.preventDefault();
        axios.post(`https://mern-9a42.onrender.com/login`,{email,password})
        .then((res)=>{
           //console.log(res)
           setToken(res.data.token)

        })
          //navigate("/admindashboard")
          //console.log(res.data);
         /*if(res.data=="Nouser"){
            alert("No user found");
          }
          else if(res.data=="Invalid"){
            alert("Invalid password");
            }
            else{
                navigate("/admindashboard");
            }*/
          
           

       
        .catch((err)=>{
            console.log(err);
        })
        };
        if(token){
            navigate("/admindashboard");
        }
    
    return(
            <main>
                <section className={innerStyle.bread}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Admin login</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-4 m-auto">
                                <form className={innerStyle.bx_shadow} onSubmit={addStudent}>
                                             <input type="text" name="email" placeholder="Email" value={email} className="form-control mb-4"onChange={(e)=>setEmail(e.target.value)}/>
                                             <input type="text" name="password" placeholder="password"value={password} className="form-control mb-4"onChange={(e)=>setPassword(e.target.value)}/>
                                             <div className="d-flex justify-content-between">
                                                <div>
                                                 <input type="submit" value="Admin Login"/>

                                                </div>
                                                <div className="float-end">
                                                    <NavLink to="/register">
                                                        Click here for new user
                                                    </NavLink>
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

export default Admin;