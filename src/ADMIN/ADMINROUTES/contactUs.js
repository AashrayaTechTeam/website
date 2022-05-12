import React from 'react'
import books from '../../ASSETS/images/book.jpg'
function contactUs() {
  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Contact us Messages</h2>
    <div className='banner-list'>
      <div style={{display:"flex",flexDirection:"column"}}>
        <span><strong>Himangshu Baishya</strong> | <strong>baishyahimangshu499@gmail.com</strong></span>
        <span style={{width:"60%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
    </div>
  </div>
  )
}

export default contactUs