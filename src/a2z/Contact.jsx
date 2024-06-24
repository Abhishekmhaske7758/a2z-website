import React from "react";

export default function Contact() {
  return (
    <>

      <div className="container-fluid" style={{ height: 'auto', backgroundColor: 'rgb(15, 24, 105)' }}>
        <div className="row pb-5">
          <div className="col-lg-6 col-sm-12 pb-5">
            <div className="row">
              <div className="col-4">
                <div className="box1">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
              </div>
              <div className="col-8">
                <div className="box1">
                  <h1 style={{ color: 'red', textShadow: '0px 0px 4px red', paddingTop: '50px' }}>Visit Us Today!</h1>
                  <h3 className="text-white">
                    Open Doors, Open Minds. Explore the Possibilities of Technology!
                  </h3>
                </div>
              </div>

            </div>


          </div>
          <div className="col-lg-6 col-sm-12 pb-5">
            <div class="animated-border-box ">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0520187970287!2d74.72775317373734!3d19.10537375105264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb17ca9d749e5%3A0x516744f9b2f35ec9!2sA2Z%20IT%20HUB%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1717580534103!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>



      <div className="header6 sqaure">
        <div className="container-fluid ">
          <div className="row  ">
            <div className="col-sm-12 col-lg-6 p-5">
              <div className="container1 ">
                <h1 alt="Avatar" className="image text-center" style={{ fontSize: '70px' }}>
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
              <div className="card">
                <div className="card2">
                  <form className="form">
                    <p id="heading">Contact Us Now!</p>
                    <div className="field">
                      
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

      <a href="/contact" className="scroll-icon" id="top"><i class="fa-solid fa-arrow-up"></i></a>

    </>
  )
}