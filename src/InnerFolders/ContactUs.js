import React, { useState } from "react";
import innerStyle from '../InnerFolders/Innerpage.module.css'
import axios from "axios";


const ContactUs=()=>{
      
        const [name , setName]= useState("");
      const [phone , setPhone]= useState("");
        const [email , setEmail]= useState("");
        const [subject , setSubject]= useState("");
        const [message , setMessage]= useState("");
        const ContactFormData =(e)=>{
            e.preventDefault();
            axios.post(`https://localhost:4000/contactus`,{name,phone,email,subject,message})
            .then((res)=>{
                alert("Mail send succ...")
                setName("")
                setPhone("");
                setEmail("");
                setSubject("");
                setMessage("");
                })
                .catch((err)=>{
                    console.log(err);
                    })
           }
  
  return (
    <main>
                   <section className={innerStyle.bread}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <h1>Contact Us</h1>
                               </div>
                           </div>
                       </div>
                   </section>
                   <section className={`py-4 ${innerStyle.aboutus}`}>
                       <div className="container">
                           <div className="row my-4">
                            <div className="col-md-8">
                                <form className={innerStyle.bx_shadow} onSubmit={ContactFormData}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='mb-4'>
                                                 <input type="text" name="name" placeholder="Name"  className="form-control mb-4"value={name} onChange={(e)=>setName(e.target.value)}/>
                                            </div>

                                        </div>
                                 
                                        <div className='col-md-6'>
                                            <div className='mb-4'>
                                                 <input type="text" name="phone" placeholder="Phone"  className="form-control mb-4"value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-4'>
                                                 <input type="text" name="email" placeholder="Email"  className="form-control mb-4"value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-4'>
                                                 <input type="text" name="subject"placeholder="Subject"className="form-control mb-4"value={subject} onChange={(e)=>setSubject(e.target.value)}/>
                                            </div>

                                        </div>
                                        <div className='col-md-12'>
                                            <div className='mb-4'>
                                                 <textarea type="text" name="message" placeholder="Message"className="form-control mb-4"value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='mb-4'>
                                                 <input type="submit" value={'Contact Us'}/>
                                            </div>

                                        </div>
                                 </div>
                                </form>
                                                                                                          
                             </div>
                             <div className="col-md-4">
                                <div className="ms-5">
                                    <h6>Surgy Life</h6>
                                    <p>C2, Amrutha hills,</p>
                                    <p>Punjagutta Officers Colony,</p>
                                    <p>Punjagutta, Hyderabad</p>
                                    <p>Telangana 500082</p>
                                    <p>+91 89853 18181</p>
                                    <p>+91 89854 18181</p>
                                    <p>info@surgylife.com</p>

                                </div>
                             </div>
                              
                           </div>
                       </div>
                   </section>
                   </main>
  )
}

export default ContactUs;