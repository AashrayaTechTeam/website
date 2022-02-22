import React, {useEffect} from 'react'
import Footer from '../FOOTER/Footer'
import About_us from './ABOUT US/About_us'
import Anouncement from './ANOUNCEMENTS/Anouncement'
import Carousel from './PAST WORK/Carousel'
import SlideShow from './SLIDESHOW/SlideShow'
import Social_media from './SOCIAL_MEDIA/Social_media'
import Social_media_handles from './SOCIAL_MEDIA/Social_media_handles'
import Aashraya_stats from '../HOME__PAGE/AASHRAYA STATS/Aashraya_stats'
import Testimonial from './REVIEWS/Testimonial'
import sakti from '../../ASSETS/images/saktiWeek.webp'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'

function Home() {
    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []) ;

    return (
        <>
        <div style={{position:"relative", overflowX:"hidden"}}>
            <SlideShow/>

            <div style={{background: "black", overflowX:"hidden"}}>
            <h2 style={{color:"white",textAlign:"center",top:"90px",zIndex:"3",position:"relative"}} data-Aos="fade-down">On INTERNATIONAL WOMEN'S DAY</h2>
            <div style={{display:"flex",position:"relative",height:"500px",justifyContent:"center",alignItems:"center"}}>
                <div><img src={sakti} data-Aos="zoom-in"/></div>
                <div style={{color:"white",padding:"20px",justifyContent:"center"}} >
                    <p data-Aos="fade-left">
                        Aashraya is an independent student(s)Organization which aims it's efforts for
                        the holistic welfare of all living beings.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores 
                        soluta sit perspiciatis culpa quis nulla vel dicta maxime dolore 
                        optio minima officiis obcaecati aut, eius laborum corporis ducimus 
                        officia nisi voluptas voluptatibus blanditiis ea! Lorem ipsum dolor 
                        sit amet, consectetur adipisicing elit. Veniam, atque.
                    </p>
                    <Link to="/saktiweek" style={{textDecoration:"none"}}><h4 style={{textAlign:"center", color:"white" , position:"relative" , borderRadius:"5px",
                    margin:"auto",padding:"7px", width:"30%",backgroundColor: "rgba(86, 195, 228, 0.74)",
                    boxShadow:"inset", color:"black",cursor:"pointer"}} data-Aos="fade-up">See More</h4> </Link>
                </div>
            </div>
            
            </div>
            <About_us/>
            <Testimonial/>
            {/* <div style={{display:"flex" , width:"100%" , height : "60vh",margin:"120px 0px"}}>
            <Anouncement/>
            <Social_media_handles/>
            </div> */}
           
            <Carousel/>
            <div style={{ backgroundImage: "linear-gradient(rgba(6, 175, 241, 0.795), white)"}}>
            <Social_media/>
            <Aashraya_stats/>
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home
