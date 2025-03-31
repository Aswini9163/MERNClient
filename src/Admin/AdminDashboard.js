import React, { useContext, useEffect, useState } from "react";
import innerStyle from '../InnerFolders/Innerpage.module.css';
import AdminSidebar from "./AdminSidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { Store } from "../App";
import axios from "axios";

const AdminDashboard = () => {
        const [data, setData]= useState("");
    const [token, setToken] = useContext(Store);
    const navigate = useNavigate();
    if (!token){
        navigate("/admin")
    }
    useEffect(()=>{
        axios.get(`https://mern-9a42.onrender.com/admindashboard`,{
            headers: {
                "x-token":token
            }
        })
        .then((res)=>{
           setData(res.data);
        })
        .catch((err) => {
            console.log(err);
            });
    })
    return (
         <main>
                        <section className={innerStyle.bread}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1>{data}</h1>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="py-5">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3">
                                        <AdminSidebar/>
                                    </div>
                                    <div className="col-md-9">
                                        <Outlet/>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
                                    </main>
    )
}

export default AdminDashboard;