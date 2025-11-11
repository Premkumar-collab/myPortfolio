import React, { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="navbar navbar-expand-lg fixed-top shadow"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="container">
        <div className="logo">
          <a href="#">
            Port<span>Flex</span>
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${isOpen ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#Home" className="nav-link active" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#Service" className="nav-link" onClick={() => setIsOpen(false)}>
                Service
              </a>
            </li>
            <li className="nav-item">
              <a href="#About" className="nav-link" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#Portfolio" className="nav-link" onClick={() => setIsOpen(false)}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#Testimonial" className="nav-link" onClick={() => setIsOpen(false)}>
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a href="#Blog" className="nav-link" onClick={() => setIsOpen(false)}>
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#Contact" className="nav-link" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <a href="#Contact" className="btn btn-primary ms-3 d-none d-lg-block">
          Contact
        </a>
      </div>
    </motion.nav>
  );
};

export default Nav;