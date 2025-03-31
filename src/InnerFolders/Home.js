import React, { useEffect, useState } from "react";
import innerStyle from './Innerpage.module.css'
import axios from 'axios';
import banner from './banner3.jpg';
import { NavLink } from "react-router-dom";


const Home = ()=>{
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
    
    return(
            <main>
                <section>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 p-0">
                               <img src={banner} alt="Banner" className="w-100" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container">
                        <h1 className={innerStyle.title}>
                            Our <span>Treatments</span>
                        </h1>
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

export default Home;