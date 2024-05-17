import React, { useEffect, useRef } from 'react'
import Header from './Header'
import img1 from '../images/react.png'
import img2 from '../images/html5.png'
import img3 from '../images/css.png'
import img4 from '../images/js.png'
import img5 from '../images/nodejs_logo.png'
import img6 from '../images/express.png'
import img7 from '../images/mongo.png'
import img8 from '../images/github.png'
import stbadge from '../images/stbadge.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pimg1 from '../images/bidweb.png'
import pimg2 from '../images/chatapp.png'
import pimg3 from '../images/bookweb.png'
import pimg4 from '../images/luminarclone.png'
import pimg5 from '../images/ngoweb.png'
import pimg6 from '../images/Fitnessweb.png'
import pimg7 from '../images/cartweb.png'
import pimg8 from '../images/media.png'
import Typewriter from 'typewriter-effect';
import resumej from '../images/Jishnu R Resume.pdf'




function Base() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div className='all text-white'>
          <div className='banner back'>
              <Header/>
              <div className='container'>
                  <div style={{height:"100vh",width:"100%"}} className="row">
                    <div data-aos="zoom-in-down" className="col-lg-5 d-flex flex-column justify-content-center ps-5">
                        <h2 className='nn m-0'>Hi, I am</h2>
                        <h1>JISHNU R</h1>
                        <div className='wrapper d-flex mb-3'>
                        <h2 className='pe-2'> I knows</h2>
                        <h2 className='ty'>
                          <Typewriter
                              options={{
                                strings: ['REACT', 'MongoDB','ExpressJS','NodeJS'],
                                autoStart: true,
                                loop: true,
                              }}
                            />
                        </h2>
                        </div>
                        <p>I'm a dedicated Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I craft robust and scalable web applications. My expertise spans front-end development with React, creating intuitive and responsive user interfaces, to back-end development with Node.js and Express.js, building efficient APIs and handling complex server-side logic</p>
                        <div className='d-flex'>
                        <a href='https://github.com/jishnu-reji' target='_blank'><button className='btn bbb'><i class="fa-brands fa-linkedin fa-beat"></i></button></a>
                        <a href='https://www.linkedin.com/in/jishnu-r-066a7a1a0/' target='_blank'><button className='btn bbb'><i class="fa-brands fa-github fa-beat"></i></button></a>
                        <a href='https://www.instagram.com/jishnu_reji_/' target='_blank'><button className='btn bbb'><i class="fa-brands fa-square-instagram fa-beat"></i></button></a>
                        </div>
                    </div>
                    <div data-aos="zoom-in-up" className="col-lg-7 d-flex justify-content-center align-items-center">
                        <img style={{width:"100%"}} className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/application-developer-doing-programming-4738242-3940009.png?f=webp" alt="" />
                    </div>
                  </div>
              </div>
          </div>
          <div className='sc'>
              <marquee behavior="" direction="left">
                <h3 className='text-white pt-2'>HTML - CSS - BOOTSTRAP - REACT - REDUX - MONGODB - NODEJS - EXPRESSJS - ANGULAR - JAVASCRIPT - GIT - GITHUB - RESPONSIVE DESIGN</h3>
              </marquee>
          </div>


          <div id='about'  style={{heigh:"100vh"}} className='about back pb-5'>
            <div className='container'>
              <h2 data-aos="fade-right" className='text-center he2 py-5'>ABOUT ME</h2>
              <div  className="row w-100 pb-5">
                  <div data-aos="zoom-in-up" className="col-lg-6 d-flex justify-content-center align-items-center">
                      <img style={{width:"100%"}} className='img-fluid' src="https://cdni.iconscout.com/illustration/premium/thumb/man-coder-programming-on-computer-6353865-5264782.png" alt="" />
                  </div>
                  <div data-aos="zoom-in-down" className="col-lg-6 d-flex flex-column justify-content-center">
                      <div className='d-flex align-items-center'>
                        <div className='me-3'><img className='imm' src={stbadge} alt="" /></div>
                        <p>As a passionate Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js), I bring a wealth of experience in building dynamic and responsive web applications. My journey in web development began with a fascination for how interactive interfaces can enhance user experiences.</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div className='me-3'><img className='imm' src={stbadge} alt="" /></div>
                        <p>In my projects, I prioritize clean, maintainable code and scalable architecture. Utilizing React, I create intuitive and responsive user interfaces that provide seamless interactions. On the server side, my expertise with Node.js and Express.js allows me to build robust APIs and handle complex server logic efficiently. My proficiency with MongoDB ensures that data management is both efficient and secure, supporting the integrity and performance of the applications I develop.</p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <div className='me-3'><img className='imm' src={stbadge} alt="" /></div>
                        <p>Collaboration and continuous learning are core to my approach as a developer. I thrive in team environments where knowledge sharing and collective problem-solving drive innovation. Staying updated with the latest industry trends and technologies, I am committed to enhancing my skill set and delivering top-notch solutions. Whether it's a startup or an established enterprise, I am dedicated to helping businesses succeed through the power of technology.</p>
                      </div>
                      
                  </div>
              </div>
              <div className='text-center'>
               <a href={resumej} download="Jishnu R Resume" > <button className='bt my-4 fw-bolder p-4'>DOUNLOAD RESUME</button></a>
              </div>
            </div>
          </div>


          <div id='services' className="services back pb-5">
            <div className=' container'>
              <h2 data-aos="fade-right" className='text-center he2 py-5'>SERVICES</h2>
              <div className="row">
                  <div className="col-lg-4">
                      <div data-aos="flip-left" className="card cc bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
                      <i style={{fontSize:'100px'}} class="fa-solid fa-globe fa-beat-fade py-3"></i>
                      <h4 className='pt-3 pb-2 fw-bolder text-danger'>WEBSITES</h4>
                      <p style={{textAlign:"center",fontSize:"18px"}}>I can build professional responsive websites optimized for the most popular search engine</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div data-aos="zoom-out-down" className="card cc bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
                      <i style={{fontSize:'100px'}} class="fa-solid fa-display fa-beat-fade py-3"></i>
                      <h4 className='pt-3 pb-2 fw-bolder text-danger'>SINGLE PAGE APPLICATION</h4>
                      <p style={{textAlign:"center",fontSize:"18px"}}>I can build professional single page applications usinf React and modern library</p>
                      </div>
                  </div>
                  <div className="col-lg-4">
                      <div data-aos="flip-left" className="card cc bg-dark text-white d-flex flex-column justify-content-center align-items-center p-5">
                      <i style={{fontSize:'100px'}} class="fa-regular fa-paper-plane fa-beat-fade py-3"></i>
                      <h4 className='pt-3 pb-2 fw-bolder text-danger'>WEB APPLICATION</h4>
                      <p style={{textAlign:"center",fontSize:"18px"}}>I can build professional responsive websites optimized for the most popular search engine</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>


          <div id='skills' className="skills back py-5">
            <div className='container '>
              <h2 data-aos="fade-right" className='text-center he2 mb-5'>MY SKILLS</h2>
              <div className="row">
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img1} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img2} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img3} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img4} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img5} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img6} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img7} alt="" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div data-aos="flip-left" className="sbox">
                    <img style={{width:"100%"}} src={img8} alt="" />
                  </div>
                </div>
                
              </div>
            </div>
          </div>


          <div id='portfolio' className="portfolio back py-5">
            <div className="container">
            <h2 data-aos="fade-right" className='text-center he2 mb-5'>PORTFOLIO</h2>
            <Slider {...settings}>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg1} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>BIDDIND APP</h3>
              <p>This is a Bidding app built using MongoDB, Express JS, React and NodeJS</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg2} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>CHAT APP</h3>
              <p>This is a chat app built using react and redux</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg3} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>BOOK WEBSITE</h3>
              <p>This is a Book app built using react and API</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg4} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>LUMINR CLONE</h3>
              <p>This is a Clone website of Luminar technolab built using HTML, CSS</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg5} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>NGO WEBSITE</h3>
              <p>This is an NGO website Clone built using HTML, CSS</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg6} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>FITNESS WEB</h3>
              <p>This is a Fitness website built using HTML, CSS and JS</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg7} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>CART WEBSITE</h3>
              <p>This is a cart website built using react and API call with CRUD operations</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='cd2'>
            <img className='img-fluid' src={pimg8} alt="" />
            <div className='card-body d-flex flex-column justify-content-center align-items-center'>
              <h3 style={{color:'yellow'}} className='fw-bolder'>MEDIA PLAYER</h3>
              <p>This is a Media player app built using react and redux</p>
              <div className="d-flex">
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-solid fa-link text-white"></i></button></a>
                <a href=""><button className='btn'><i style={{fontSize:"30px"}} class="fa-brands fa-github text-white"></i></button></a>
              </div>
            </div>
          </div>
        </div>
       
      </Slider>
            </div>
          </div>
      </div>
    </>
  )
}

export default Base