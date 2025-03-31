import React from 'react'
import { NavLink } from 'react-router-dom';
import adminStyles from './Admin.module.css';
import innerStyle from '../InnerFolders/Innerpage.module.css';

const AdminSidebar = () => {
  return (
    <div className={adminStyles.sidebar}>
        <ul>
               <li>
                <NavLink to="" className={innerStyle.decor}>Add Treatments</NavLink>
                </li>
                <li>
                <NavLink to="deletetreatment"className={innerStyle.decor}>Delete & Edit Treatments</NavLink>
                </li>
                <li>
                <NavLink to="adddoctor"className={innerStyle.decor}>Add Doctors</NavLink>
                </li>
                <li>
                <NavLink to="deletedoctor" className={innerStyle.decor}>Delete & Edit Doctors</NavLink>
                </li>
                <li>
                <NavLink to="addoffer"className={innerStyle.decor}>Add Offers</NavLink>
                </li>
                <li>
                <NavLink to="deleteoffer"className={innerStyle.decor}>Delete & Edit Offers</NavLink>
                </li>
                <li>
                <NavLink to="appointmentdata"className={innerStyle.decor}>Appointment Data</NavLink>
                </li>
        </ul>
    </div>
  )
}

export default AdminSidebar;