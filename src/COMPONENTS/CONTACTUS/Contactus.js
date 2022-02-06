import React from 'react'
import './contactus.css';

function Contact_us() {
    return (
        <div>
           <h1 className='h1-contactus'>Contact US</h1>
      <p className="sub-title-contactus" >Any question or remarks? Just write us a message!</p>

      <div className="contact-container">
        <div className="contact-info-contactus">
          <h4 className="h4-contactus">
            Contact Information
          </h4>
          <p>Fill up the form and our team will get back</p>
          <div className="icon-text-contactus">
            <i class="fa-contactus fa-phone" aria-hidden="true"></i>
            <span>123456789</span>
          </div>
          <div className="icon-text-contactus">
            <i class="fa-contactus fa-envelope" aria-hidden="true"></i>
            <span>addyourmail.gmail.com</span>
          </div>
          <div className="icon-text-contactus">
            <i class="fa-contactus fa-map-marker" aria-hidden="true"></i>
            <span>Aashraya main office address</span>
          </div>
          <div className="social-media-contactus">
            <a href="#" className="icon-circle-contactus">
              <i class="fab-contactus fa-facebook-f"></i>
            </a>
            <a href="#" className="icon-circle-contactus">
              <i class="fab-contactus fa-twitter"></i>
            </a>
            <a href="#" className="icon-circle-contactus">
              <i class="fab-contactus fa-instagram"></i>

            </a>
            <a href="#" className="icon-circle-contactus">
              <i class="fab-contactus fa-youtube"></i>
            </a>
          </div>
        </div>
        <form>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label>First Name</label>
              <input type="text" />
            </div>
            <div className="form-group-contactus">
              <label>Last Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label>E-Mail</label>
              <input type="email" />
            </div>
            <div className="form-group-contactus">
              <label>Phone</label>
              <input type="tel" />
            </div>
          </div>
          <div className="col-contactus">
            <div className="form-group-contactus">
              <label>Write Your message </label>

              <textarea-contactus></textarea-contactus>

            </div>


          </div>
          <div className="form-group-contactus right">
            <button-contactus className="Primary">Send message</button>

          </div>
        </form>
      </div >

        </div>
    )
}

export default Contact_us
