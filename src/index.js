import React from "react";
import ReactDom from 'react-dom';
import Home from "./a2z/Home";
import Navbar from "./a2z/Navbar";
import About from "./a2z/About";
import Career from "./a2z/Carrer";
import Contact from "./a2z/Contact";

import './index.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";

ReactDom.render(
  <>
  <Router>
  <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/career" element={<Career></Career>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
    </Routes>
  </Router>
  </>
  ,document.getElementById('root')
);