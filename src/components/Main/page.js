import React from 'react'
import './page.css'


function Main() {
  return (
    
    <div className='bg-con' >
        <div className='hea-btn-con'>
        <h1 className='main-hea'>Your <span className='main-span-hobby'>Hobby</span>, Your <span className='main-span-community'>Community...</span></h1>
        <button className='get-start-btn'>Get Started</button>
        </div>
        <div className='main-img-con'>
             <img src='/images/Group 99.png' className='main-img-img' alt='grop of people img'/>
        </div>
    </div>
  )
}

export default Main