"use client"

import React from 'react'
import './page.css'
import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa6";

import { useState } from 'react'
function Login() {

  const [ loginStatus, changeLoginStatus] = useState('SIGN_IN')
  const changeAsSignIn=()=>{
    changeLoginStatus('SIGN_IN')
  }
  const changeAsJoinIn=()=>{
    changeLoginStatus('JOIN_IN')
  }
  console.log(loginStatus);
  return (
    <main className='main-bg-con row'>

        <div className='col-12 col-md-8 content-con' >
          <div className='d-flex flex-column justify-content-between con-con'>
            <h1 className='hea'>
               Explore your <span className='hobby-h'>hobby</span> or <span className='passion-h'>passion</span>
            </h1>
            <p className='para d-none d-md-flex'>
              Explore your hobby or passion
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…                
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
            </p>

            <p className='para  d-md-none'>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
            </p>
          </div>               
        </div>





        <div className='col-12 col-md-4 login-con'>
            {loginStatus === 'SIGN_IN' ?
              <div className='sign-in-con'>
                 <div className='sign-in-login-con d-flex'>
                  <button onClick={()=> changeLoginStatus('SIGN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="SIGN_IN" ? ' #8064A2' : '#a69ab5'}}>
               Sign In
                  </button>
                  <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                    Join In
                  </button>
                 </div>

                 <div className='continue-with-con'>
                   <div className='box'>
                    <FcGoogle className='g-i'/>
                    <p className='continue-p'>Continue with Google.</p>
                   </div>
                  
                   <div className='box'>
                    <FaFacebook className='g-i'/>
                    <p className='continue-p'>Continue with Facebook.</p>
                   </div>
                 </div>

                <div className='lin-con d-flex'>
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
                 <div className='sign-in-login-con d-flex'>
                 <button onClick={()=> changeLoginStatus('SIGN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="SIGN_IN" ? ' #8064A2' : '#a69ab5'}}>
                 Sign In
                 </button>
                 <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                    Join In
                  </button>
                    
                 </div>

                 <div className='continue-with-con'>
                   <div className='box'>
                   <FcGoogle className='g-i'/>
                   <p className='continue-p'>Continue with Google.</p>
                   </div>
                  
                   <div className='box'>
                   <FaFacebook className='g-i'/>
                   <p className='continue-p'>Continue with Facebook.</p>
                   </div>
                 </div>

                <div className='lin-con d-flex'>
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

            <div className='img-con col-6'>
              <img src='/images/Group 27.png' alt='group of people' className='img'/>
            </div>  


    </main>
  )
}

export default Login


/*
  <main className='main-bg-con row'>
        
            <div className='col-12 col-md-8 content-con' >

              <div className='d-flex flex-column justify-content-between con-con'>
                 <h1 className='hea'>
                   Explore your <span className='hobby-h'>hobby</span> or <span className='passion-h'>passion</span>
                 </h1>
                 <p className='para d-none d-md-flex'>
                 Explore your hobby or passion
                 Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…                
                 If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
                 </p>
                 <p className='para  d-md-none'>
                 Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform.
                 </p>

                 <div className='img-con1 d-none d-md-flex '>
                   <img src='/images/Group 27.png' alt='group of people' className='img'/>
                </div>     

                 </div>               
            </div>


            <div className='col-12 col-md-4 login-con'>
            {loginStatus === 'SIGN_IN' ?
              <div className='sign-in-con'>
                 <div className='sign-in-login-con d-flex'>
                  <button onClick={()=> changeLoginStatus('SIGN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="SIGN_IN" ? ' #8064A2' : '#a69ab5'}}>
               Sign In
                  </button>
                  <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                    Join In
                  </button>
                 </div>

                 <div className='continue-with-con'>
                   <div className='box'>
                    <FcGoogle className='g-i'/>
                    <p className='continue-p'>Continue with Google.</p>
                   </div>
                  
                   <div className='box'>
                    <FaFacebook className='g-i'/>
                    <p className='continue-p'>Continue with Facebook.</p>
                   </div>
                 </div>

                <div className='lin-con d-flex'>
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
                 <div className='sign-in-login-con d-flex'>
                 <button onClick={()=> changeLoginStatus('SIGN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="SIGN_IN" ? ' #8064A2' : '#a69ab5'}}>
                 Sign In
                 </button>
                 <button onClick={()=> changeLoginStatus('JOIN_IN')}  style={{backgroundColor:'transparent', border:'none',color:loginStatus==="JOIN_IN" ? ' #8064A2' : '#a69ab5'}}>
                    Join In
                  </button>
                    
                 </div>

                 <div className='continue-with-con'>
                   <div className='box'></div>
                  
                   <div className='box'></div>
                 </div>

                <div className='lin-con d-flex'>
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

<div className='img-con2 d-md-none '>
                  <img src='/images/Group 27.png' alt='group of people' className='img'/>
                </div>
          </div>
         

     </div>
    </main>*/