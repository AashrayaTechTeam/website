
import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
import img from '../../ASSETS/logo.jpg'
function Footer() {
    return (
        <div style={{width:"100%" , height:"auto" ,padding:"20px 0px",position:"relative", background:"#144C6B" , color:"white" , textAlign:"center"}}>
            <footer className='footer-box'>
                <section>
                    <img style={{width:"200px",borderRadius:"30px"}} src={img}/>
                </section>
                <section className='quick-link'>
                    <span>Donate</span>
                    <span>Blogs</span>
                    <span>Project</span>
                    <span>Team</span>
                    <span>Library</span>
                </section>
                <section className='Others'>
                    <span>Disclaimer</span>
                    <span>Privacy Policy</span>
                    <span>Terms and Condition</span>
                </section>
                <section className='Career'>
                    <span>Career</span>
                    <span>Join as Volunteers</span>
                </section>
                <section className='contact-form'>
                    <form>
                        <h3>Subscribe Now</h3>
                        <input type="email" placeholder='Email'/>
                        <button>Send</button>
                    </form>
                </section>
            </footer>
            <div className='footer-bottom'>
               <p>Thanks for your contribution for the wellbeing of the human race.</p>
               <p>Build with ❤️ from Team Aashraya @2022</p>
               <Link to="/admin"><button className='btn p-4 ' style={{position:"absolute",background:"white",left:"0",bottom:"0",opacity:"0"}}>Admin</button></Link>
            </div>
            
        </div>
    )
}

export default Footer
