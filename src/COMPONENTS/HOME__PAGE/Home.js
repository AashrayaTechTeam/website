import React from 'react'
import Footer from '../FOOTER/Footer'
import About_us from './ABOUT US/About_us'
import Anouncement from './ANOUNCEMENTS/Anouncement'
import SlideShow from './SLIDESHOW/SlideShow'
import Social_media_handles from './SOCIAL_MEDIA/Social_media_handles'
function Home() {
    return (
        <>
        <div>
            <SlideShow/>
            <About_us/>
            <div style={{display:"flex" , width:"100%" , height : "600px"}}>
            <Anouncement/>
            <Social_media_handles/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home
