import React from 'react'
import books from '../../ASSETS/images/book.jpg'
function HomePageSlideshow() {


  const handleSumbitSlide = (e)=>{
    e.preventDefault();
    document.getElementById("form-slide").style.display = 'flex';
  }

  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>SlideShow Content</h2>
    <div className='banner-list'>
      <div>
        <img src={books}/>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
      <div>
        <img src={books}/>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
      <div>
        <img src={books}/>
        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
        <button className='btn btn-danger m-1'>Delete</button>
      </div>
    </div>
    <button onClick={handleSumbitSlide} className='btn btn-dark w-50 m-auto'>Add Slideshow Content</button>
    <div id="form-slide" style={{display:"none"}} className='box-container'>
    <form className='form-container'>
    <input type="text" placeholder='Heading' />
    <input type="text" placeholder='Image url' />
    <textarea style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}} type="text" placeholder='Write a small paragraph here' />
    <textarea style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px",height:"500px"}} type="text" placeholder='Write post here about the event' />
    <input type="Submit" className='btn btn-dark' />
    </form>
    </div>
  </div>
  )
}

export default HomePageSlideshow