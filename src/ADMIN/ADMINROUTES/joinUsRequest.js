import React from 'react'
import books from '../../ASSETS/images/book.jpg'
function joinUsRequest() {
  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Join us requests</h2>
    <div className='banner-list'>
      <div>
        {/* <img style={{display:"flex",margin:"10px auto"}} src={books}/> */}
        <span style={{display:"flex",flexDirection:"column"}}>
          <span>Name : Himangshu Baishya</span>
          <span>State : Assam</span>
          <span>Mobile number : 8638281845</span>
          <span>Address : Guwahati</span>
          <span>City : Guwahati</span>
          <span>District : Kamrup</span>
          <span>Pin code : 781001</span>
        </span>
        <button className='btn btn-danger m-1 '>Delete</button>
      </div>
      <div>
        <span style={{display:"flex",flexDirection:"column"}}>
          <span>Name</span>
          <span>State</span>
          <span>Mobile number</span>
          <span>Address</span>
          <span>City</span>
          <span>District</span>
          <span>Pin code</span>
        </span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
      <div>
        <span style={{display:"flex",flexDirection:"column"}}>
          <span>Name</span>
          <span>State</span>
          <span>Mobile number</span>
          <span>Address</span>
          <span>City</span>
          <span>District</span>
          <span>Pin code</span>
        </span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
      <div>
        <span style={{display:"flex",flexDirection:"column"}}>
          <span>Name</span>
          <span>State</span>
          <span>Mobile number</span>
          <span>Address</span>
          <span>City</span>
          <span>District</span>
          <span>Pin code</span>
        </span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
    </div>
    </div>
  )
}

export default joinUsRequest