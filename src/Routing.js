import React from "react";
import { Route, Routes } from "react-router-dom";
//import StudentData from "./InnerFolders/StudentData";
import EditStudent from "./InnerFolders/EditStudent";
import AddStudent from "./InnerFolders/AddStudent";
import DeleteStudent from "./InnerFolders/DeleteStudent";
import Invalid from "./InnerFolders/Invalid";
import StudentEdit from "./InnerFolders/StudentEdit";
import Admin from "./Admin/Admin"
import Register from "./Admin/Register";
import AdminDashboard from "./Admin/AdminDashboard";
import AddDoctor from "./Admin/AddDoctor";
import AddTreatment from "./Admin/AddTreatment";
import AddOffer from "./Admin/AddOffer";
import DeleteTreatment from "./Admin/DeleteTreatment";
import DeleteDoctor from "./Admin/DeleteDoctor";
import DeleteOffer from "./Admin/DeleteOffer";
import Home from "./InnerFolders/Home";
import TreatmentDetails from "./InnerFolders/TreatmentDetails";
import AboutUs from "./InnerFolders/AdoutUs";
import Treatments from "./InnerFolders/Treatments";
import Offers from "./InnerFolders/Offers";
import BookAppointment from "./InnerFolders/BookAppointment";
import ContactUs from "./InnerFolders/ContactUs";
import EditTreatment from "./Admin/EditTreatment";
import AppointmentData from "./Admin/AppointmentData";
import EditAppointment from "./Admin/EditAppointment";


const Routing = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/treatmentdetails/:treatname"element={<TreatmentDetails/>}/>
                 <Route path="/aboutus" element={<AboutUs/>} />
                 <Route path="/treatments" element={<Treatments/>}/>
                 <Route path="/offers" element={<Offers/>}/>
                 <Route path="/bookappointments" element={<BookAppointment/>}/>
                 <Route path="/bookappointments/:dtname/:ddname" element={<BookAppointment/>}/>
                 <Route path="/editappointment/:appid/:status" element={<EditAppointment/>}/>
                 <Route path="/contactus" element={<ContactUs/>}/>
                 <Route path="/edittreatment/:ttname" element={<EditTreatment/>}/>
                 <Route path="/admin" element={<Admin />} />
                 <Route path="/admindashboard" element={<AdminDashboard />} > 
                 <Route path="" element={<AddTreatment />} />
                 <Route path="deletetreatment" element={<DeleteTreatment />} />
                 <Route path="adddoctor" element={<AddDoctor />} />
                 <Route path="deletedoctor" element={<DeleteDoctor />} />
                 <Route path="addoffer" element={<AddOffer />} />
                 <Route path="deleteoffer" element={<DeleteOffer />} />
                 <Route path="appointmentdata" element={<AppointmentData/>}/>
                 </Route>
                 <Route path="/register" element={<Register/>}/>
                <Route path="/AddStudent" element={<AddStudent />} />
                <Route path="/EditStudent" element={<EditStudent />} />
                <Route path="/DeleteStudent" element={<DeleteStudent />} />
                <Route path="/studentedit/:sid" element={<StudentEdit />} />
                <Route path="*" element={<Invalid/>}/>
             </Routes>
        </div>
    )
}

export default Routing;