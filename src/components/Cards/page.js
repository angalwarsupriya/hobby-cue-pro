import React from 'react'
import './page.css'

import { HiUserGroup } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { BsBagCheckFill } from "react-icons/bs";
import { BsCalendarCheck } from "react-icons/bs";

const cards_details_list =[
{
    title:'#8064A2',
    description:'Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.',
    logo:'HiUserGroup',
    btnCon:'Connect',
    color:'#8064A2'
},
{
    title:'Place',
    description:'Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.',
    logo:'FaLocationDot',
    btnCon:'Meet up',
    color:'#77933C'
},
{
    title:'Product',
    description:'Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.',
    logo:'PiShoppingCartSimpleFill',
    btnCon:'Get it',
    color:'#C0504D'
},
{
    title:'Program',
    description:'Find events, meetups and workshops related to your hobby.  Register or buy tickets online.',
    logo:'BsCalendarCheck',
    btnCon:'Attend',
    color:'#0096C8'
},
]
function Cards() {
  return (
    <div className='row d-flex justify-content-center cards-bg-con'>
           <div className='col-5 card-con p-4' style={{borderColor:'#8064A2'}}>
                <div className='top-row d-flex'>
                  <HiUserGroup className='icon' style={{color:"#8064A2"}}/>
                   <h4 className='title'>People</h4>
                </div>
                <p className='card-p'>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                <button className='card-btn'>Connect</button>
            </div>

            <div className='col-5 card-con p-4' style={{borderColor:'#77933C'}}>
                <div className='top-row d-flex'>
                   <FaLocationDot className='icon' style={{color:"#77933C"}}/>
                   <h4 className='title'>Place</h4>
                </div>
                <p className='card-p'>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                <button className='card-btn'>Meet up</button>
            </div>

            <div className='col-5 card-con p-4' style={{borderColor:'#C0504D'}}>
                <div className='top-row d-flex'>
                   <BsBagCheckFill className='icon' style={{color:"#C0504D"}}/>
                   <h4 className='title'>Product</h4>
                </div>
                <p className='card-p'>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                <button className='card-btn'>Get it</button>
            </div>

            <div className='col-5 card-con p-4' style={{borderColor:'#0096C8'}}>
                <div className='top-row d-flex'>
                   <BsCalendarCheck className='icon' style={{color:"#0096C8"}}/>
                   <h4 className='title'>Program</h4>
                </div>
                <p className='card-p'>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                <button className='card-btn'>Attend</button>
            </div>
  
    </div>
  )
}

export default Cards