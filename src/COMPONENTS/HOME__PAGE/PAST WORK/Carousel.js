import React from 'react'
import '../../../styles/Past work/Carousel.css'
import img from '../../../ASSETS/images/library.jpg'
function Carousel() {

  return (
    <div>
    <section id="testim" class="testim">
    <div class="wrap">
    <img src={img} alt="project image" />
      <div id="testim-content" class="content-project">
          <h2>Previous Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            <button>Explore</button>
        </div>
    </div>
  </section>
</div>
  )
}

export default Carousel