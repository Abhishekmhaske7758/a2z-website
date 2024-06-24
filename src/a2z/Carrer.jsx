import React, { useEffect } from "react";
import Aos from "aos";

export default function Career() {
  
  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <div className="container-fluid pb-4" style={{ backgroundColor: 'black' }}>
        <div className="row pb-5">
          <div className="col-12">
            <div className="row p-4">
              <div className="col-lg-7 col-sm-12" data-aos="zoom-in">
                <h1 className="text-center mt-5 pt-2" style={{color:'red',fontSize:'100px',textShadow:'0px 0px 10px red'}}>Career</h1>
                <h5 className="text-white text-center mb-5 pb-5 pt-3" style={{textShadow:'0px 0px 10px white',fontSize:'40px'}}>
                  Make Your Mark: Be a Part of Our<br/> Journey towards Technological<br/> Excellence!
                </h5>
              </div>
              <div className="col-lg-5 col-sm-12 pt-5 " data-aos="fade-up">
                <div className="card_career mt-5 ml-3">
                  <img src="img/developer.jpg" />
                  </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>



      <div className="container-fluid p-5" style={{backgroundColor:'rgb(5, 14, 98)'}}>
        <div className="row pt-5 pb-5">
          <div className="col-sm-12 col-lg-6" data-aos="flip-up">
            <h3 className="text-white text-center pt-5 " style={{textShadow:'0px 0px 2px white'}}>Your Next Adventure Awaits</h3>
            <h1 className="text-center pb-5" style={{color:'red',textShadow:'0px 0px 4px red'}}>Share Your Resume<br/>
            👉👉👉
            </h1>
          </div>
          <div className="col-sm-12 col-lg-6  stock_image">
            <img src="img/Web-Developers.png" className="image_stock " data-aos="zoom-in"/>
            <div className="layer">
            <a href="mailto:info@a2zithub.org" className="text-white pl-5 ml-5 info_stock" style={{fontSize:'30px'}}>info@a2zithub.org</a>
            </div>
          </div>
        </div>
      </div>



      <a href="/career" className="scroll-icon" id="top"><i class="fa-solid fa-arrow-up"></i></a>
      
    </>
  )
}

{/* <a href="mailto:info@a2zithub.org" className="text-white pl-5 ml-5" style={{fontSize:'30px'}}>info@a2zithub.org</a> */}
