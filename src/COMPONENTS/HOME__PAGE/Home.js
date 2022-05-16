import React, {useState,useEffect} from 'react'
import Footer from '../FOOTER/Footer'
import About_us from './ABOUT US/About_us'
import Carousel from './PAST WORK/Carousel'
import SlideShow from './SLIDESHOW/SlideShow'
import Social_media from './SOCIAL_MEDIA/Social_media'
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

    const [posters,setPosters] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect( async()=>{
        const res = await fetch("/getPoster" , {
          method:"GET" ,
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          } , 
          credentials:"include"
        });
        const data = await res.json();
        setPosters(data);
        setLoading(false)
      },[])

console.log(Object.keys(posters).length)

    if(loading)
      return <>Loading...</>

    return (
        <>
        <div style={{width:"70px",height:"70px",background:"linear-gradient(to right, #fc00ff, #00dbde)",margin:"20px",zIndex:"5",display:"flex",justifyContent:"center",borderRadius:"100%",position:"fixed",right:"0%",bottom:"0%",color:"black"}}><span style={{margin:"auto",fontWeight:"bolder"}}><a style={{textDecoration:"none",color:"white"}} href="https://api.whatsapp.com/send?phone=6264803084">Chat</a></span></div>
        <div style={{position:"relative", overflowX:"hidden"}}>
            <SlideShow/>
            <div style={{background: "black", overflowX:"hidden"}}>
            <h2 style={{color:"white",textAlign:"center",top:"90px",zIndex:"3",position:"relative"}} data-Aos="fade-down">{posters.poster[Object.keys(posters).length].heading}</h2>
            <div style={{display:"flex",position:"relative",height:"500px",justifyContent:"center",alignItems:"center"}}>
                <div><img src={posters.poster[Object.keys(posters).length].imageUrl} data-Aos="zoom-in" style={{opacity:"0.8",width:"1000px",height:"500px"}}/></div>
                <div style={{color:"white",padding:"20px",justifyContent:"center"}} >
                    <p data-Aos="fade-left" style={{fontSize:"15px",lineHeight:"25px",letterSpacing:"2px"}}>
                        {posters.poster[Object.keys(posters).length].smallPara}
                    </p>
                    <Link to="/poster" style={{textDecoration:"none"}}><h4 style={{textAlign:"center", color:"white" , position:"relative" , borderRadius:"5px",
                    margin:"auto",padding:"7px", width:"30%",backgroundColor: "rgba(86, 195, 228, 0.74)",
                    boxShadow:"inset", color:"black",cursor:"pointer"}} data-Aos="fade-up">See More</h4> </Link>
                </div>
            </div>
            
            </div>
            <About_us/>
            <Testimonial/>
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
