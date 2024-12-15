"use client"

import React from 'react'
import './page.css'
import { useState } from 'react'
function Login() {

  const [ loginStatus, changeLoginStatus] = useState('SIGN_IN')

  return (
    <main className='main-bg-con conatiner'>
      
        <div className='row'>
            <div className='col-8 content-con d-flex flex-column justify-content-between pt-5' >
                <div className=''>
                 <h1 className='hea'>
                   Explore your <span className='hobby-h'>hobby</span> or <span className='passion-h'>passion</span>
                 </h1>
                 <p className='para'>
                 Explore your hobby or passion
                 Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities… 
                  <br />
                 If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                 </p>
                 </div>

                 <div className='img-con'>
                  <img src='/images/Group 27.png' alt='group of people' className='img'/>
                 </div>                 
            </div>


            <div className='col-4 login-con'>


            {loginStatus === 'SIGN_IN' ?
              <div className='sign-in-con'>
                 <div className='sign-in-login-con d-flex pt-5 '>
                    <h3 className='in-h m-2'>Sign In</h3>
                    <h3 className='in-h m-2'>Join In</h3>
                 </div>

                 <div className='continue-with-con mt-4'>
                   <div className='box'></div>
                  
                   <div className='box'></div>
                 </div>

                <div className='lin-con d-flex mt-2'>
                  <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
                  <p className='line-p'>Or connect with</p>
                  <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
               </div>
                

                <form className='form-con'>
                  <input type='email' className='input' placeholder='Email'/>
                  <input type='password' className='input' placeholder='Passowrd'/>
                  <p className='strenth-p'>Passowrd strengh</p>

                  <div className='sumit-con'>
                    <div className='remember-me-con'>
                      <div className='remember-me-con-row d-flex'>
                        <input id='rememberme' type='checkbox' className='checkbox'/>
                        <label htmlFor='rememberme'> Remember me</label>
                      </div>
                    </div>
                    <button type='submit' className='submmit-btn'>Continue</button>
                  </div>
                </form>
            </div>
            :
            <div className='join-con'>
                 <div className='sign-in-login-con d-flex pt-5 '>
                    <h3 className='in-h m-2'>Sign In</h3>
                    <h3 className='in-h m-2'>Join In</h3>
                 </div>

                 <div className='continue-with-con mt-4'>
                   <div className='box'></div>
                  
                   <div className='box'></div>
                 </div>

                <div className='lin-con d-flex mt-2'>
                  <hr style={{fontWeight:'bolder', color:'black' ,width:'30%'}}/>
                  <p className='line-p'>Or connect with</p>
                  <hr style={{fontWeight:'bolder', color:'black',width:'30%'}}/>
               </div>
                

                <form className='form-con'>
                  <input type='email' className='input' placeholder='Email'/>
                  <input type='password' className='input' placeholder='Passowrd'/>
                  <p className='strenth-p'>Passowrd strengh</p>

                  <div className='sumit-con'>
                   
                    <p className='submmit-p'>by continuin, your agree to our <span className='span-p'>Terms of Service</span> and <span className='span-p'>Policy</span></p>
                    <button type='submit' className='submmit-btn'>Agree and Continue</button>
                  </div>
                </form>
            </div>

}

          </div>
         

     </div>
    </main>
  )
}

export default Login