import React from 'react'
import './page.css'

import { PiShoppingCartSimpleFill } from "react-icons/pi";

import { FaBell } from "react-icons/fa"

import { FaBookmark } from "react-icons/fa6";

import { FaChevronDown } from "react-icons/fa"; 

function Header() {
  return (
    <header className='row header-bg-con d-flex align-items-center'>
        <div className='col-3 con1'>
            <img src='/images/HobbyCue Logo.png' className='logo-img'/>
        </div>

        <div className='col-4 con2'>
            <div className='search-bar-con'>
              <input type='search' className='search-bar'/>
              <div className='search-icon-con'>

              </div>
            </div>
        </div>
        
        <div className='col-5 con3 d-flex justify-content-between'>

           <div className='pop-up-links-con d-flex align-items-center justify-content-between'>
              <div className='explore-con d-flex align-items-center justify-content-between'>
                <img src='/images/Group.png' className='link-img'/>
                <p className='link-p'>Explore</p>
                <FaChevronDown className='down'/>
              </div>

              <div className='hobbies-con d-flex align-items-center justify-content-between'>
                <img src='/images/Hobbies.png' className='link-img'/>
                <p className='link-p'>Explore</p>
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
    </header> 
  )
}

export default Header

/*Explore your hobby or passion
Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.*/