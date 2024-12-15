import React from 'react'
import './page.css'

import { TfiFacebook } from "react-icons/tfi";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { IoIosPaperPlane } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { MdOutlineCopyright } from "react-icons/md";
const linksList=[
    {
        footerlinkTitle:'Hobbycue',
        links:['About Us', 'Our Services', 'Work with Us','FAQs', 'Contact Us']
    },
    {
        footerlinkTitle:'How DO I',
        links:['Sign Up', 'Add aListing', 'Claim Listing','Post a Query', 'Add a Blog Post', 'Other Queries']
    },
    {
        footerlinkTitle:'Quick Links',
        links:['Listings', 'Blog Posts', 'Shop / Store','Community']
    }

]
function Footer() {
  return (
    <>
    <footer className='row footer-bg-con'>
        {linksList.map((eachDetails)=>(
            <div className='col-3'>
                <h6 className='footer-link-title'>{eachDetails.footerlinkTitle}</h6>
                {eachDetails.links.map((eachLink)=>(
                    <a className='link d-block mt-2'>{eachLink}</a>
                ))}
            </div>
        ))}
        <div className='col-3 contact-con'>
            <div>
            <h6 className='footer-link-title'>Social Media</h6>
            <div className='social-media-icons-row d-flex'>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <TfiFacebook className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <FaTwitter className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <AiFillInstagram className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <AiOutlineGooglePlus className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <FaYoutube className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <IoIosPaperPlane className='media-icon'/>
                </div>
                <div className='icon-con d-flex align-items-center justify-content-center'>
                    <IoMail className='media-icon'/>
                </div>
            </div>
            </div>


            <div>
               <h6 className='footer-link-title mt-5'>Invite Friend</h6>
               <div className='search-bar-con'>
              <input type='search' className='search-bar' placeholder='Email ID'/>
              <div className='footer-search-icon-con'>
                Invite
              </div>
            </div>
            </div>

        </div>

        </footer>


        <div className='row c-row'>
        <div className='c-con col-12 m-0 d-flex justify-content-center align-items-center '>
            <div className='d-flex align-items-center'>
               <MdOutlineCopyright className='c-icon'/>
               <p className='c'>Purple Cues Private Limited</p>
            </div>
        </div>
        </div>
        </>

  )
}

export default Footer