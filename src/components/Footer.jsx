import React from "react";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
            className="footer-logo"
          >
            <div className="logo">
              <a href="#">
                Port<span>Flex</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
            className="footer-nav"
          >
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Portfolio</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </motion.div>
          <motion.div
            className="hero-social d-flex align-items-center justify-content-center gap-3"
            initial={{ opacity: 0, x: -500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <a href="https://x.com/redzking002?t=QBQIMC94pPLgVROrkNX5vg&s=08">
              {" "}
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://dribbble.com/prem-kumar-a">
              {" "}
              <i className="ri-dribbble-line itag1"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/prem-kumar-a-346630398/"
              target="_blank"
            >
              <i className="ri-linkedin-line"></i>
            </a>
          </motion.div>

          <div className="footer-bottom mt-4 pt-4">
            @ Copyright 2025. All Rights Reserved By{" "}
            <a href="#">CodeWithRedz</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
