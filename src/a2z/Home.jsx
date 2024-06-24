import React, { useEffect, useState } from "react";
import Aos from "aos";

export default function Home() {
 

  useEffect(() => {
    Aos.init();

  }, []);

  return (
    <>


      <div className="header1">
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row p-0">
                <div className="col-5  p-0" style={{ backgroundColor: '#000' }} >
                </div>
                <div className="col-lg-7 col-sm-12 p-0">
                  <img src="img/slider-1.jpg" alt="..." />
                </div>
              </div>
              <div className="carousel-caption p-0">
                <h1 >A2Z IT HUB</h1>
                <p className="mt-5 text-center" style={{ textShadow: '0px 0px 20px white' }}>  <b>Experience digital excellence with our custom-built<br />
                  Websites and intuitive software solution.  </b>
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-5 p-0" style={{ backgroundColor: 'rgb(29, 4, 54)' }}>
                 
                </div>
                <div className="col-lg-7 col-sm-12 p-0">
                  <img src="https://hostinginindia.com/assets/images/webp/wordpress.webp" className="d-block w-100" height={'600px'} alt="..." style={{ backgroundColor: 'rgb(29, 4, 54)' }} />
                </div>
              </div>

              <div className="carousel-caption part1 p-0">
              <h1 className="text-center" >Front End Coding</h1>
                  <h2 className="text-center " >Online Career Day</h2>
                  <p className="text-center ">Lorem ipsum dolor sit amet consectetur adipisicing <br />elit. A, assumenda? </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/slider-2.webp" className="d-block w-100" height={'600px'} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" style={{opacity:'0'}}></span>
            <span className="sr-only">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" style={{opacity:'0'}}></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>



      <div className="header2">
        <div className="container-fluid">
          <div className="row" >
            <div className="col-lg-4 col-sm-12 p-0" style={{ backgroundColor: 'black' }}>
              <h2 className="text-center animate p-5" style={{ marginTop: '100px' }} data-aos="fade-up"> <b >Unlock</b> the power of innovation with our cutting-edge <span>Website</span> and <span>software </span>solutions. </h2>
            </div>
            <div className="col-lg-8 col-sm-12 p-5" style={{ backgroundColor: 'black' }}>
              <img src="https://a2zithub.org/assets/img10.png" height={'300px'} className="w-100 mt-5 mb-5" data-aos="zoom-in-up" />
            </div>
          </div>
        </div>
      </div>

      <div className="header3">
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: 'rgb(32, 4, 122)' }}>
            <div className="col-lg-5 col-sm-12 p-0" >
              <h1 className="text-center" style={{ color: 'rgb(175, 89, 13)', textShadow: '0px 0px 20px rgb(175, 89, 13)', marginTop: '200px' }}>Application</h1>
              <h2 className="text-center text-white" style={{ textShadow: '0px 0px 20px white' }}>Development</h2>
              <h4 className="text-center text-white" data-aos="fade-up"
                data-aos-duration="1000">
                Experience the power of <br /><span style={{ color: 'rgb(175, 89, 13)', textShadow: '0px 0px 20px rgb(175, 89, 13)' }}>tailored application</span> <br /> development that brings your <br /><span style={{ color: 'rgb(175, 89, 13)', textShadow: '0px 0px 20px rgb(175, 89, 13)' }}>ideas to life.</span> </h4>
            </div>
            <div className="col-lg-7 col-sm-12 p-0" >
              <img src="img/application.png" height={'600px'} width={'100%'} data-aos="fade-down"
                data-aos-duration="2000" />
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid" style={{ backgroundColor: 'rgb(5, 14, 98)' }}>
        <div className="container p-5">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <h3 className="text-white" data-aos="flip-down">
                A <span style={{ color: 'rgb(175, 89, 13)' }}>landmark</span><br />
                partnership expansion<br /> with A2Z for enchanced Business
              </h3>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="cube-container">
                <div className="cube">
                  <div className="face front"></div>
                  <div className="face back"></div>
                  <div className="face right"></div>
                  <div className="face left"></div>
                  <div className="face top"></div>
                  <div className="face bottom"></div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12 col-lg-3 mt-3">
              <div className="card card-body" style={{ backgroundColor: 'transparent', height: '310px', border: 'none' }} data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h4 className="" style={{ color: 'aqua' }}>Singavi Jewellers </h4>
                <p className="text-white ">SingaviJewellers.com is Designed and deployed a visually stunning digital marketing campaign for a high-end jewelry brand, increasing brand awareness and driving customer engagement.</p>
                <button className="btn btn-outline-primary text-white"> Wanna Check?</button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mt-3">
              <div className="card card-body" style={{ backgroundColor: 'transparent', height: '310px', border: 'none' }} data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h5 className="" style={{ color: 'aqua' }}> Nagebaba Multistate </h5>
                <p className="text-white ">Successfully implemented a centralized ERP system for a multi-state business, enabling seamless communication, streamlining operations, and improving overall efficiency.</p>
                <button className="btn btn-outline-primary text-white">Wanna Check?</button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mt-3">
              <div className="card card-body" style={{ backgroundColor: 'transparent', height: '310px', border: 'none' }} data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h4 className="" style={{ color: 'aqua' }}> RNarvade Empire  </h4>
                <p className="text-white ">R Narvade Empire is a commercial building project for a client who constructs a high-rise condominium, offering luxury living spaces with breathtaking views and top-notch amenities.</p>
                <button className="btn btn-outline-primary text-white">Wanna Check?</button>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 mt-3">
              <div className="card card-body" style={{ backgroundColor: 'transparent', height: '310px', border: 'none' }} data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <h5 className="" style={{ color: 'aqua' }}>Sri Balaji Tranport</h5>
                <p className="text-white ">Developed a comprehensive transportation management system, enabling efficient route planning, real-time tracking, and streamlined  for a transport company.</p>
                <button className="btn btn-outline-primary text-white">Wanna Check?</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="header4">
        <div className="container-fluid p-5" style={{ backgroundColor: 'rgb(18, 18, 62)' }}>
          <h3 className="text-white text-center" data-aos="zoom-in"><span style={{ fontSize: '50px', color: 'red' }}>Explore</span> like never<br />
            before...
          </h3>
          <h5 className="text-white text-center" data-aos="zoom-in">At <span style={{ color: 'red' }} >A2Z</span>, we offer a range of <span style={{ color: 'red' }} >IT services</span><br /> designed to help businesses of all sizes <span style={{ color: 'red' }} >leverage technology</span><br /> to drive <span style={{ color: 'red' }} >growth & success.</span><br /> </h5>

          <div className="row" >
            <div className="col-sm-12 col-lg-3 main-card mt-5">
              <div className="card card-body card-1" data-aos="fade-up"
                data-aos-anchor-placement="top-center">

                <i className=" fa-solid fa-suitcase " ></i>
                <h5>Custom Software Development</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 main-card mt-5">
              <div className="card card-body card-2" data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <i className=" fa-solid fa-check-to-slot " ></i>
                <h5 >Web Appliction Development</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 main-card mt-5">
              <div className="card card-body card-1" data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <i className=" fa-solid fa-signal  text-center" ></i>
                <h5 >Mobile Application Development</h5>
              </div>
            </div>
            <div className="col-sm-12 col-lg-3 main-card mt-5">
              <div className="card card-body card-2" data-aos="fade-up"
                data-aos-anchor-placement="top-center">
                <i className=" fa-brands fa-digital-ocean " ></i>
                <h5 className="pr-5 pl-5">Digital Marketing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="header5">
        <div className="container-fluid ">
          <h4 className="text-justify text4 text-center" data-aos="zoom-in-up">
            <p className="text-center" style={{ fontSize: '100px' }}> <i className="fa-solid fa-quote-left"></i> </p>
            Working with A2Z was a game-changer for our business.<br />Their experts provided us with the right IT solutions to improve our<br /> operations and streamline our processes.
          </h4>
          <h1 className="text-center" data-aos="zoom-in" style={{ color: 'rgb(101, 239, 10)', textShadow: '0px 0px 20px rgb(101, 239, 10)' }}>Kadhubhau Kale</h1>
          <h5 className="text-center" data-aos="zoom-in" style={{ color: 'rgb(101, 239, 10)', textShadow: '0px 0px 20px rgb(101, 239, 10)' }}>(Chairman of Nagebaba Multistate) </h5>
        </div>
      </div>

      <div className="header6 sqaure">
        <div className="container-fluid ">
          <div className="row  ">
            <div className="col-sm-12 col-lg-6 p-5">
              <div className="container1 " data-aos="fade-up">
                <h1 alt="Avatar" className="image text-center" style={{ fontSize: '70px',fontFamily: 'sans-serif' }}>
                  <i className="fa-solid fa-phone-volume" style={{ color: 'rgb(237, 244, 44)' }}></i><br />
                 Contact<br /> To A2Z <br />
                 IT HUB
                </h1>
                <div className="overlay" >
                  <div className="text" >
                    <i className="fa-solid fa-headset pb-4" style={{ textAlign: 'center', fontSize: '80px', textShadow: '0px 0px 5px white' }}></i>
                    <h2><span style={{ color: 'red', textShadow: '0px 0px 10px red' }}>
                      We're here to <br />
                      listen.
                    </span>
                      <p style={{ textShadow: '0px 0px 10px white' }}>Ready to take the next step? Contact US</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 p-5 ">
              <div className="card" data-aos="fade-down">
                <div className="card2">
                  <form className="form">
                    <p id="heading">Contact Us Now!</p>
                    <div className="field">
                      @
                      <input type="text" className="input-field" placeholder="Enter Your Full Name" autoComplete="off" />
                    </div>
                    <div className="field">
                      <i className="fa-solid fa-phone"></i>
                      <input type="number" className="input-field" placeholder="Enter Your Mobile" />
                    </div>
                    <div className="field">
                      <i className="fa-solid fa-envelope"></i>
                      <input type="email" className="input-field" placeholder="Enter Your Email" />
                    </div>
                    <div className="field">
                      <textarea placeholder="Enter Your Message" className="input-field "></textarea>
                    </div>
                    <div className="btn">
                      <button className="button2">Submit</button>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <a href="/" className="scroll-icon" id="top"><i class="fa-solid fa-arrow-up"></i></a>
    </>
  )
}