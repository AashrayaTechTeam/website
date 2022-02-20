import React from 'react'
import instagram from '../../../ASSETS/social/insta.png'
import facebook from '../../../ASSETS/social/facebook.png'
import linkedin from '../../../ASSETS/social/linkedin.png'
import youtube from '../../../ASSETS/social/youtube.png'
import '../../../styles/Home.css'
import { Link } from 'react-router-dom'
function Social_media() {
  return (

    <div style={{width:"100%" , height:"300px",textAlign:"center" , margin:"100px 0px"}}>
      <h1 style={{margin:"60px",color:"black"}}>Social Media Handles</h1>
    <div className="social-icon">
      <a href='https://www.instagram.com/aashraya_07/'><img src ={instagram} alt="Instagram"/></a>
      <a href='https://www.facebook.com/TeamAashraya'><img src ={facebook} alt="facebook"/></a>
      <a href='https://www.linkedin.com/company/team-aashraya/mycompany/'><img src ={linkedin} alt="linkedin"/></a>
      <a href='https://www.youtube.com/channel/UCs1KMJrFdEwJWO2l_gYqVQg'><img src ={youtube} alt="youtube"/></a>
    </div>
    </div>
    )
}

export default Social_media