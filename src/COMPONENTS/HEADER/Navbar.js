import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import Logo from '../../ASSETS/logo.jpg'
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand"><img alt='Aashraya' style={{width:"40px"}} src={Logo}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Team
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link to="/assam_representative" class="dropdown-item" >Assam</Link></li>
            <li><a class="dropdown-item" href="#">Bihar</a></li>
            <li><a class="dropdown-item" href="#">MP</a></li>
          </ul>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Volunteers
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/assam_volunteers" class="dropdown-item" >Assam</Link></li>
            <li><a class="dropdown-item" href="#">Bihar</a></li>
            <li><a class="dropdown-item" href="#">MP</a></li>
          </ul>
        </li> */}

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About Us</a>
        </li>   
        <li class="nav-item">
          <Link to ="/join_us" class="nav-link active" aria-current="page" >Join Us</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/library">Library</a>
        </li>  
        <li class="nav-item">
          <Link to ="/past_works" class="nav-link active" aria-current="page" >Past Works</Link>
        </li> 

      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
