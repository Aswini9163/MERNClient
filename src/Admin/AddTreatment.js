import React, { useState } from 'react'
import innerStyle from "../InnerFolders/Innerpage.module.css" 
import axios from 'axios'

const AddTreatment = () => {
    const [tname, setTname] = useState();
    const [tdesc, setTdesc] = useState();
    const addTreatment = (e) => {
        e.preventDefault();
        axios.post(`https://mern-9a42.onrender.com/treatment`,{tname, tdesc})
        .then((res)=>{
            alert("Treatment added succ...");
            setTname("");
            setTdesc("");
           
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <section>
                    <div className="container">
                        <div className="row ">
                            <div className="col-md-7">
                                <form className={innerStyle.bx_shadow} onSubmit={addTreatment}>
                                             <input type="text" name="name" placeholder="T.Name" value={tname} className="form-control mb-4"onChange={(e)=>setTname(e.target.value)}/>
                                             <textarea type="text" name="description" placeholder="T.Description"value={tdesc} className="form-control mb-4"onChange={(e)=>setTdesc(e.target.value)}></textarea>
                                             <input type="submit" value="Add Treatment"/>
                                </form>                                               
                            </div>
                        </div>
                    </div>
    </section>
  )
}

export default AddTreatment;