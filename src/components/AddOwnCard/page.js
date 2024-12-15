import React from 'react'
import { FaCirclePlus } from "react-icons/fa6";
import './page.css'
function AddOwnCard() {
  return (
    
    <div className='row add-own-card-bg-con d-flex justify-content-center'>

        <div className='col-12 add-own-card-con'>
            <div className='top-row d-flex'>
                <FaCirclePlus className='icon' style={{color:"#0096C8"}}/>
                <h4 className='title'>Place</h4>
            </div>
            <p className='card-p'>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page.</p>
            <button className='card-btn'>Add new</button>
        </div>
    </div>
  )
}

export default AddOwnCard