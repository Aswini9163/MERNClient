
import innerStyle from '../InnerFolders/Innerpage.module.css'
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Treatments=()=>{
    const [data, setData] = useState([]);
    useEffect(()=>{
      axios.get(`https://mern-9a42.onrender.com/treatment`)
      .then(res => {
        // console.log(res)
        setData(res.data);
         
      })
      .catch((err)=>{
          console.log(err);
      })
    })
  
  return (
    <main>
                   <section className={innerStyle.bread}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <h1>Treatments</h1>
                               </div>
                           </div>
                       </div>
                   </section>
                   <section className="py-5">
                    <div className="container">
                        <div className="row ">
                                {
                                    data.map((treat) => {
                                        return (
                                            <div className="col-md-3"  key={treat._id}>
                                                <NavLink to= {`/treatmentdetails/${treat.tname}`} className={innerStyle.decor}>
                                                <div className={`mb-4 ${innerStyle.bx_shadow}`}>
                                                    {treat.tname}
                                                </div>
                                                </NavLink>
                                                </div>
                                        )
                                    })
                                }
                        </div>
                    </div>
                </section>
                   </main>
  )
}

export default Treatments;