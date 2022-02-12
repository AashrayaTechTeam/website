import React from 'react'
import Footer from '../FOOTER/Footer'
import About_us from './ABOUT US/About_us'
import Anouncement from './ANOUNCEMENTS/Anouncement'
import Carousel from './PAST WORK/Carousel'
import SlideShow from './SLIDESHOW/SlideShow'
import Social_media from './SOCIAL_MEDIA/Social_media'
import Social_media_handles from './SOCIAL_MEDIA/Social_media_handles'
import Aashraya_stats from '../HOME__PAGE/AASHRAYA STATS/Aashraya_stats'
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
            <Carousel/>
            <Social_media/>
            <Aashraya_stats/>
            <Footer/>
        </div>
        </>
    )
}

export default Home
