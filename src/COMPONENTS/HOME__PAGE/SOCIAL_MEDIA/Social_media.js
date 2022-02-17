import React from 'react'
import instagram from '../../../ASSETS/social/insta.png'
import facebook from '../../../ASSETS/social/facebook.png'
import linkedin from '../../../ASSETS/social/linkedin.png'
import youtube from '../../../ASSETS/social/youtube.png'
import '../../../styles/Home.css'
function Social_media() {
  return (
    <div style={{width:"100%" , height:"300px",textAlign:"center" , margin:"100px 0px"}}>
      <h1 style={{margin:"60px",color:"black"}}>Social Media Handles</h1>
    <div className="social-icon">
      <img src ={instagram} alt="Instagram"/>
      <img src ={facebook} alt="facebook"/>
      <img src ={linkedin} alt="linkedin"/>
      <img src ={youtube} alt="youtube"/>
    </div>
    </div>
    )
}

export default Social_media