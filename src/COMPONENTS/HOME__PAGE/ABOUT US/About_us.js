import React from 'react'
import logo from '../../../ASSETS/logo.jpg'
import './About_us.css'

function About_us() {


    return (
		<div id="aboutUs"> 
        <div className="heading">
                <h1>What Aashraya Does ?</h1>
			</div>
        
	    <div className="box">
            <div className="img">
                <img src={logo} alt="Aashraya"/>
			</div> 
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                    soluta sit perspiciatis culpa quis nulla vel dicta maxime dolore 
                    optio minima officiis obcaecati aut, eius laborum corporis ducimus 
                    officia nisi voluptas voluptatibus blanditiis ea! Lorem ipsum dolor 
                    sit amet, consectetur adipisicing elit. Veniam, atque.
                </p>
            </div>
		</div>
		</div>
    )
}

export default About_us
