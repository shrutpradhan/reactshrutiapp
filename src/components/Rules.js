import React from 'react'
import upfrontfees from "../images/upfrontfees.png"
import studyGJP from "../images/studyGJP.png"
import './rules.css'

export default function Rules() {
  return (
    <div className='Rules'>
    <div className='rulescont'>
    
        <div className='img-cont'>
            <img alt='' src={upfrontfees} />
           </div>
        <div className='rules1'>Zero Upfront Fee</div>
       
        <div className='rules1cont'>
        <div className='rules12'>
            Avail the best programming course towards your upward career path
            </div>
            </div>
            </div>
            <div className='rulescont1'>
        <div className='img-cont1'>
            <img alt='' src={studyGJP} />
           </div>
        <div className='rules11'>Study with Guaranteed Job Programming</div>
        
        </div>
        </div>
       
          
         
            
            
    
  )
}
