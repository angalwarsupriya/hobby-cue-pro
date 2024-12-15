import React from 'react'
import './page.css'

import { IoIosSearch } from "react-icons/io";
import { MdMenu } from "react-icons/md";



import { PiShoppingCartSimpleFill } from "react-icons/pi";

import { FaBell } from "react-icons/fa"

import { FaBookmark } from "react-icons/fa6";

import { FaChevronDown } from "react-icons/fa"; 

function Header() {
  return (
    <header className='header-bg-con d-flex align-items-center'>
      <div className='row header-row'>
      
        <div className='col-5 col-md-2 col-md-2  con1' >
          <img src='/images/HobbyCue Logo.png' className='logo-img'/>
        </div>



        <div className='col-5 col-md-4 col-lg-4 con2  d-none d-md-flex'>
            <div className='search-bar-con'>
              <input type='search' className='search-bar'/>
              <div className='search-icon-con d-flex justify-content-center align-items-center'>
                    <IoIosSearch style={{color:"#fff", fontSize:'16px'}}/>
              </div>
            </div>
        </div>


        
        <div className='col-md-6 col-lg-5 con3 d-flex justify-content-between d-none d-md-flex'>

           <div className='pop-up-links-con d-flex align-items-center justify-content-between'>
              <div className='explore-con d-flex align-items-center justify-content-between'>
                <img src='/images/Group.png' className='link-img'/>
                <p className='link-p'>Explore</p>
                <FaChevronDown className='down'/>
              </div>

              <div className='hobbies-con d-flex align-items-center justify-content-between'>
                <img src='/images/Hobbies.png' className='link-img'/>
                <p className='link-p'>Hobbies</p>
                <FaChevronDown className='down'/>
              </div>
           </div>

           <div className='links-icons-con d-flex align-items-center justify-content-between'>
             <FaBookmark className='link-i1 '/>
             <FaBell className='link-i2'/>
             <PiShoppingCartSimpleFill className='link-i3'/>
              
           </div>

           
           <button className='sign-in-btn'>Sign In</button>
        </div>
        
         <div className='col-7 d-flex d-md-none i-con'>
          <IoIosSearch className='i'/>
           <FaBell className='i'/>
           <MdMenu className='i'/>
         </div>

        </div>
    </header> 
  )
}

export default Header

/*Explore your hobby or passion
Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.*/