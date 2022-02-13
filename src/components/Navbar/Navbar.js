import React , {useState , useEffect} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import $ from 'jquery'
import '../../styles/Navbar/Navbar.css'
import donate from "../../ASSETS/donate-vector.png"
function Navbar() {


  window.addEventListener('scroll' , function(){
    let res = window.scrollY;
    if(res >= 150)
      $("#navbar").css({'backgroundColor':'rgba(0, 0, 0, 0.884)' , 'padding':'10px 20px' , 'transition':'all 1s' })  
    else
      $("#navbar").css({'backgroundColor':'transparent' , 'padding':'40px' })
    
  
  })


  return (
    <div>
      <nav id="navbar" className='navbar' style={{background:"transparent" , padding:"40px", width:"100%", height:"70px",
    color:"white" , position:"fixed" , top:"0%" , left:"0%" , zIndex:"5"
    }}>
         <div class="nav-logo"><h3 class="logo">Aashraya</h3></div>

<ul class="nav-links" id="links">
  <li><a href="#">Team</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Join Us</a></li>
  <li><a href="#">Library</a></li>
  <li><a href="#">Gallery</a></li>
  <li><a href="#">Donate</a></li>
  <img src={donate} style={{position:"absolute" , right:"1%" , width:"120px"}} />
</ul>
      </nav>
    </div>

  )
}

export default Navbar