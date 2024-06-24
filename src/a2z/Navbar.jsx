import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container-fluid menu">
        <div className="row">
          <div className="col-12 p-0">
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor:'transparent' }}>
              <a className="navbar-brand" href="">
                <img src="https://a2zithub.org/assets/165710745335077275.png" height={'70px'} />
              </a>
              <button className="navbar-toggler bg-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <NavLink className="nav-link ml-3 text-white" to={"/"}>Home </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link ml-3 text-white" to={"/about"}>About Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link ml-3 text-white" to={"/career"}>Career</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link ml-3 text-white " to={"/contact"}>Contact Us</NavLink>
                  </li>
                </ul>

              </div>
            </nav>
          </div>
        </div>
      </div>

    </>
  )
}