import React, { useEffect } from "react";
import Aos from "aos";

export default function About() {

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <section className="position-relative">
      <div className="header1" style={{ backgroundImage: 'url(https://a2zithub.org/assets/img16.png)', height: '600px', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%', borderImage:'fill 0 linear-gradient(#0005, red)'}}>
        <div className="conatiner-fluid" style={{ height: '100%', width: '100%', backgroundColor: 'rgba(128,55,128,0.5)' }}>
          <div className="container" data-aos="fade-up">
            <h1 className="text-danger" style={{paddingTop:'150px'}}>About Us</h1>
            <h2 className="text-white" style={{ textShadow: '0px 0px 10px white' }}>A2Z IT HUB PVT. LTD</h2>
            <h5 style={{ color: 'cyan', textShadow: '0px 0px 1px cyan' }}>
              At A2Z IT Hub, we believe in unleashing the<br/>
              <span style={{ color: '#16FF00', letterSpacing: '3px' }}>full potential</span><br />
              of technology to drive your <br />
              business forward.<br />
              With our expertise and innovative solutions,<br /> we empower you to stay ahead of the competition and <br />
              achieve remarkable success.
            </h5>
          </div>
        </div>
      </div>
      </section>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12" style={{ backgroundColor: 'black' }}>
            <div className="bubble-container pb-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-sm-12 mt-5">
                    <div className="card1 mt-5 mb-5" data-aos="fade-right">
                      <div className="content1">
                        <i className="fa-solid fa-person-circle-question" style={{ textAlign: 'center', color: 'white', fontSize: '50px' }}></i>
                        <h4 className="text-white">Our mission</h4>
                        <p className="para">
                          Our mission is to enable the success of our clients. We are committed to understanding their unique needs, challenges, and goals, and delivering customized solutions.
                          By partnering with our clients, we aim to create long-term value.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-12 mt-5">
                    <div className="card1 mt-5 mb-5" data-aos="fade-left">
                      <div className="content1">
                        <i className="fa-solid fa-eye-low-vision" style={{ textAlign: 'center', color: 'white', fontSize: '50px' }}></i>
                        <h4 className="text-white">Our Vision</h4>
                        <p className="para">

                          Our vision is to make a significant and positive impact on the businesses we serve, helping them harness the full potential of technology and navigate the ever-evolving digital landscape with confidence and success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>


              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
              <div className="bubble"></div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid">
        <div className="row " style={{ backgroundColor: '#0a0d5d' }}>
          <div className="col-6 ">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Inovation</p>
                  <p className="small-desc">
                    Embrace and drive technological <br/>innovation.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Quality</p>
                  <p className="small-desc">
                    Deliver high-quality solutions and <br/>services.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Focus</p>
                  <p className="small-desc">
                    Prioritize client satisfaction and personalized <br/>solutions.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Improvement</p>
                  <p className="small-desc">
                    Learn, adapt, and improve<br/> continuously.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Reliability</p>
                  <p className="small-desc">
                    Ensure reliable and robust software and applications.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="about_card" data-aos="zoom-in">
                  <p className="card-title">Accountability</p>
                  <p className="small-desc">
                    Take ownership and deliver on commitments.
                  </p>
                  <div className="go-corner">
                    <div className="go-arrow">→</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img src="img/about.jpg" className="w-100 mt-5" height={'480px'} data-aos="zoom-in-up" style={{boxShadow:'0px 0px 10px aqua',borderRadius:'20px'}}/>
          </div>
        </div>
      </div>


      <div className="container-fluid" style={{backgroundColor:'black'}}>
          <h1 className="text-white">OUR BEST <span style={{color:'rgb(245,85,48)'}}>CLIENT</span> </h1>
        <div className="row">
          <div className="col-lg-6 col-sm-12 mt-5 pt-5">
            <div id="carouselExampleControls" className="carousel slide pt-5" data-ride="carousel">
              <div className="carousel-inner mt-5">
                <div className="carousel-item active">
                  <h5 className="text-center text-white" style={{textShadow:'0px 0px 10px white'}}>
                    Their level of expertise and professionalism is unmatched, and we highly recommend their services to anyone looking to leverage technology to grow their business.
                    </h5>
                    <h2 className="text-center" style={{color:'red',textShadow:'0px 0px 10px red'}}>Kadubhau Kale</h2>
                    <p className="text-white text-center">( Chairman of Nagebaba Multistate )</p>
                </div>
                <div className="carousel-item">
                  <h5 className="text-center text-white" style={{textShadow:'0px 0px 10px white'}}>
                  Working with A2Z was a game-changer for our business.Their experts provided us with the right IT solutions to improve our operations and streamline our processes.
                    </h5>
                    <h2 className="text-center" style={{color:'red',textShadow:'0px 0px 10px red'}}>Rohit Narwade</h2>
                    <p className="text-white text-center">( Director Of RNARVADE EMPIRE PVT. LTD. )</p>
                    <h2></h2>
                </div>

              </div>
              <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" style={{opacity:'0'}}></span>
                <span className="sr-only">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" style={{opacity:'0'}}></span>
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>


          <div className="col-lg-6 col-sm-12 mt-5">
            <div className="row">
              <div className="col-4" style={{height:'170px'}}>
                <img src="img/nagebaba.webp" className="our_client1"/>
              </div>
              <div className="col-4" style={{height:'170px'}}>
                <img src="img/rnempire.png" className="our_client2"/>
              </div>
              <div className="col-4" style={{height:'170px'}}>
                <img src="img/shingavi.jpg" className="our_client3"/>
              </div>
              <div className="col-4" style={{height:'170px'}}>
                <img src="img/global_logo2.jpeg" className="our_client4"/>
              </div>
              <div className="col-8" style={{height:'170px'}}>
                <img src="img/nirmal.png" className="our_client5"/>
              </div>
              <div className="col-4" style={{height:'170px'}}>
                <img src="img/SBTL logo-02.png" className="our_client6"/>
              </div>
              <div className="col-8" style={{height:'170px'}}>
                <img src="img/167783776522983034.jpeg" className="our_client5"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="header6 sqaure">
        <div className="container-fluid ">
          <div className="row  ">
            <div className="col-sm-12 col-lg-6 p-5">
              <div className="container1 " data-aos="fade-up">
                <h1 alt="Avatar" className="image text-center" style={{ fontSize: '70px' }}>
                  <i className="fa-solid fa-phone-volume" style={{ color: 'rgb(237, 244, 44)' }}></i><br />
                  Contact<br /> To A2Z <br />
                  IT HUB
                </h1>
                <div className="overlay" >
                  <div className="text" >
                    <i className="fa-solid fa-headset pb-4" style={{ textAlign: 'center', fontSize: '80px', textShadow: '0px 0px 5px white' }}></i>
                    <h2><span style={{ color: 'red',textShadow:'0px 0px 10px red' }}>
                      We're here to <br />
                      listen.
                    </span>
                      <p style={{textShadow:'0px 0px 10px white'}}>Ready to take the next step? Contact US</p>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6 p-5 ">
              <div className="card" data-aos="flip-up">
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
      <a href="/about" className="scroll-icon" id="top"><i class="fa-solid fa-arrow-up"></i></a>
    </>
  )
}