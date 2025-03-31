
import innerStyle from '../InnerFolders/Innerpage.module.css'
import React from 'react';


const Offers=()=>{
  
  return (
    <main>
                   <section className={innerStyle.bread}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <h1>Offers</h1>
                               </div>
                           </div>
                       </div>
                   </section>
                   <section className={`py-4 ${innerStyle.aboutus}`}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <h6>Offers</h6>
                                   <p className='border-bottom pb-3'><i class="fa-solid fa-quote-left"></i> Surgylife is committed to create a culture of quality, patient safety, efficiency and accountability towards patient care. NABH certified hospitals ensures that patients are treated with respect, dignity and courtesy at all times.We make sure that patients are involved in care planning and decision making. Ensuring patients are treated by qualified and trained staff and commitment to prevent adverse events that may occur.</p>
                                   <p className='border-bottom pb-3'><i class="fa-solid fa-quote-left"></i> Surgylife is committed to create a culture of quality, patient safety, efficiency and accountability towards patient care. NABH certified hospitals ensures that patients are treated with respect, dignity and courtesy at all times.We make sure that patients are involved in care planning and decision making. Ensuring patients are treated by qualified and trained staff and commitment to prevent adverse events that may occur.</p>

                               </div>
                           </div>
                       </div>
                   </section>
                   </main>
  )
}

export default Offers;