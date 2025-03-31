
import innerStyle from '../InnerFolders/Innerpage.module.css'



const AboutUs=()=>{
  
  return (
    <main>
                   <section className={innerStyle.bread}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <h1>About Us</h1>
                               </div>
                           </div>
                       </div>
                   </section>
                   <section className={`py-4 ${innerStyle.aboutus}`}>
                       <div className="container">
                           <div className="row">
                               <div className="col-md-12">
                                   <p>" A multi-speciality healthcare platform delivering a hassle-free experience for all your surgical and medical needs with personalized care. "</p>
                                   <p>Surgylife is committed to create a culture of quality, patient safety, efficiency and accountability towards patient care. NABH certified hospitals ensures that patients are treated with respect, dignity and courtesy at all times.We make sure that patients are involved in care planning and decision making. Ensuring patients are treated by qualified and trained staff and commitment to prevent adverse events that may occur.</p>
                                   <h6>Vision</h6>
                                   <p>Surgylife is committed to create a culture of quality, patient safety, efficiency and accountability towards patient care. NABH certified hospitals ensures that patients are treated with respect, dignity and courtesy at all times.We make sure that patients are involved in care planning and decision making. Ensuring patients are treated by qualified and trained staff and commitment to prevent adverse events that may occur.</p>
                                   <h6>Mission</h6>
                                   <p>Surgylife is committed to create a culture of quality, patient safety, efficiency and accountability towards patient care. NABH certified hospitals ensures that patients are treated with respect, dignity and courtesy at all times.We make sure that patients are involved in care planning and decision making. Ensuring patients are treated by qualified and trained staff and commitment to prevent adverse events that may occur.</p>
                               </div>
                           </div>
                       </div>
                   </section>
                   </main>
  )
}

export default AboutUs;