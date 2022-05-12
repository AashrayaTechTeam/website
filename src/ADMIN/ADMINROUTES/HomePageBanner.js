import React from 'react'
import books from '../../ASSETS/images/book.jpg'
function HomePageBanner() {

  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Add Event Banner</h2>
    <div id="form-slide" className='box-container'>
    <form className='form-container'>
    <input type="text" placeholder='Heading' />
    <input type="text" placeholder='Image url'/>
    <textarea style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}} type="text" placeholder='Write here a small paragraph' />
    <textarea style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px",height:"500px"}} type="text" placeholder='Writer here about the event' />
    <input type="Submit" className='btn btn-dark' />
    </form>
    </div>
  </div>
  )
}

export default HomePageBanner