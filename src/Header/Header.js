import React from "react";
import headermodule from './Header.module.css';
import {NavLink} from "react-router-dom"
import logo from './logo.png'


const Header = () =>{
    return(
        <div className={headermodule.header} >
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                     <NavLink className="navbar-brand" to="/">
                        <img src={logo} alt="Logo"/>
                     </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                           {/* <li className="nav-item">
                                <NavLink className="nav-link" to="/addstudent">Add Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/deletestudent">Delete Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="editstudent">Edit Student</NavLink>
                            </li>*/}

                           <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutus">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/treatments">Treatments</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/bookappointments">Book Appointment </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Offers">Offers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                            </li>


                        </ul>
                    </div>
             </div>
            </nav>
        </div>

    );
}

export default Header;