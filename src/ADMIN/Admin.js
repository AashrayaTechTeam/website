import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Admin.css'
function Admin() {
  return (
    <div style={{backgroundColor:"black",width:"100%",height:"100vh",position:"absolute",top:"0%"}}>
      
      <div className='form-box'>
      <form className='form-container'>
      <h1>Sign In </h1>
        <input type="text" placeholder='Aashraya Id'/>
        <input type="password" placeholder='Password' />
        <Link to="/admin/admin_handle"><button className='btn btn-primary'>Sign In</button></Link>
        <Link to="/" className='link'><p>Forgot Password?</p></Link>
      </form>
      </div>
    </div>
  )
}

export default Admin