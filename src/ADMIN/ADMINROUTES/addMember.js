import React from 'react'
import "../../styles/AdminRoutes.css"
function addMember() {
  return (
    <div className='container-box'>
      <h1 className='heading'>Add Member</h1>
      <div className='box-container'>
      <form className='form-container'>
      <select required style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}}>
            <option class="dropdown-item" hidden >Designation</option>
            <option class="dropdown-item" >State Representative</option>
            <option class="dropdown-item" >Tech Team Member</option>
            <option class="dropdown-item" >Media Team</option>
            <option class="dropdown-item" >PR Team</option>
            <option class="dropdown-item" >Management Team</option>
            <option class="dropdown-item" >Fundraise Team</option>
      </select>
      <input type="text" placeholder='Name' />
      <input type="text" placeholder='Email' />
      <input type="text" placeholder='Mobile Number' />
      <input type="text" placeholder='Profile Pic url' />
      <input type="text" placeholder='Aadhar Card Photo url' />
      <input type="text" placeholder='State' />
      <input type="text" placeholder='District' />
      <input type="text" placeholder='Location' />
      <input type="text" placeholder='Address' />
      <input type="text" placeholder='Pin' />
      <input type="Submit" className='btn btn-dark' />
      </form>
      </div>
    </div>   
  )
}

export default addMember

// Designation, Name, 
//     profilePic, AadharCardPhoto,State,District,
//     Location,
//     Address,
//     Pin,
//     mobileNumber,
//     email