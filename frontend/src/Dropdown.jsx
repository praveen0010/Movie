import React from 'react'
import {Link} from 'react-router-dom'

const Dropdown = ({dropdowmgen,handelgenere}) => {
    
    return (
        
    <div className="dropdown">
        <button className=" p-2 w-100  btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        {dropdowmgen}
        </button>
       <ul className="dropdown-menu ">
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link "  onClick={()=>handelgenere(28,'Action')}>Action</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link " onClick={()=>handelgenere(12,'Adventure')} >Adventure</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link "  onClick={()=>handelgenere(35,'Comedy')}>Comedy</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(10749,'Romance')}>Romance</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(53,'Thriller')}>Thriller</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(10752,'War')}>War</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(18,'Drama')}>Drama</p>
          </li>
          <li className="dropdown-item">
            <p style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(36,'History')}>History</p>
          </li>
          <li className="dropdown-item">
            <button style={{cursor:'pointer'}} className="nav-link" onClick={()=>handelgenere(27,'Horror')}>Horror</button>
          </li>
          <li className="dropdown-item" >
            <Link   type="button" className="btn btn-danger" to='/login'>Logout</Link>
          </li>
     </ul>
  </div> 
  
    )
}
export default Dropdown
