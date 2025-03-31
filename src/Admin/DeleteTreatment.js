import axios from 'axios';
import React, { useEffect, useState } from 'react'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import DataTables from 'datatables.net-dt/js/dataTables.dataTables.min.js'
import { NavLink } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const DeleteTreatment = () => {
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

    setTimeout(()=>{
     new DataTables("#mytable");

    },1000)
  })
  const DeleteTreatmentData = (tid)=>{
    axios.delete(`https://mern-9a42.onrender.com/treatment/${tid}`)
    .then(res => { 
      alert("Treatment Deleted succ..")
     
    })
    .catch((err)=>{
      console.log(err);
      })

  }
    return (
    <section>
      <div className='container'>
        <div className="row">
          <div className="col-md-12">
            <div className='table-responsive'>

            <table className='table table-bordered' id="mytable">
              <thead>
                <tr>
                  <th>T.Name</th>
                  <th>T.Desc</th>
                  <th>Action</th>
                
                </tr>
              </thead>
              <tbody>
                {
                  data.map((treatment)=>{
                    return(
                      <tr>
                        <td>{treatment.tname}</td>
                        <td>{treatment.tdesc}</td>
                        <td className='d-flex'>
                          <button className="btn btn-danger me-2" onClick={() =>DeleteTreatmentData(treatment._id)}><DeleteIcon/></button>
                          <NavLink to={`/edittreatment/${treatment.tname}`}>

                          <button className="btn btn-success" ><EditIcon/></button>
                          </NavLink>
                        </td>
                        
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default DeleteTreatment