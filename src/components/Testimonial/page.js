import React from 'react'
import { FaQuoteLeft } from "react-icons/fa6";
import './page.css'
function Testimonial() {
  return (
    <div className='testimonail-bg-con row'>
        <div className='col-11 testimonail-card p-5'> 

            <div className='top-row d-flex'>
                <div className='quote-round'>
                  <FaQuoteLeft className='quote-icon'/>
                </div>
                <h4 className='title'>Program</h4>
            </div>

            <p className='card-p'>In a fast growing and ever changing city like Bangalore, 
                it sometimes becomes very difficult to find or connect with like minded people. 
                Websites like hobbycue.com is a great service which helps me get in touch with, 
                communicate, connect, and exchange ideas with other dancers. It also provides the 
                extra benefit of finding products and services that I can avail, which I can be assured 
                is going to be of great quality as it comes recommended by people of the hobbycue community.
                To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, 
                all under one roof, is an excellent idea and I highly recommend it.
            </p>
            <div className='card-bottom-con d-flex justify-content-center align-items-center mt-5'>
                <img src='/images/Audio Track.png' alt='audio-img' className='audio-img'/>
                <div className='face-img-con d-flex justify-content-center align-items-center'>
                   <img src='/images/Ellipse 12.png' alt='audio-face-img' className='audio-face-img'/>
                   <div className='d-flex flex-column justify-content-center align-items-center mt-3'>
                    <h6>
                    Shubha Nagarajan
                    </h6>
                    <p className='type-p'>Classical Deancer</p>
                   </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Testimonial