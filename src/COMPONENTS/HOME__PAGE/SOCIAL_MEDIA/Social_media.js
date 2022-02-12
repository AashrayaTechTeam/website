import React from 'react'
import instagram from '../../../ASSETS/social/insta.png'
import facebook from '../../../ASSETS/social/facebook.png'
import linkedin from '../../../ASSETS/social/linkedin.png'
import youtube from '../../../ASSETS/social/youtube.png'
function Social_media() {
  return (
    <div style={{width:"100%" , height:"300px",textAlign:"center" , margin:"60px 0px"}}>
      <h1 style={{margin:"60px"}}>Social Media Handles</h1>
    <div>
      <img src ={instagram} alt="Instagram"/>
      <img src ={facebook} alt="Instagram"/>
      <img src ={linkedin} alt="Instagram"/>
      <img src ={youtube} alt="Instagram"/>
    </div>
    </div>
    )
}

export default Social_media