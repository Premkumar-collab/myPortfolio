import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Resume from '../../../public/Full Stack Resume.pdf'
import hero1 from "../../assets/hero1.png";
import cardboximg1 from "../../assets/cup-img.png";
import cardboximg2 from "../../assets/admin-icon.png";
import shape1 from "../../assets/curn-icon.png";
import shape2 from "../../assets/half-circle.png";
import shape3 from "../../assets/triangle-icon.png";
import shape4 from "../../assets/circle-bg-left-img.png";
import Serviceicon1 from "../../assets/service-icon1.png";
import Serviceicon2 from "../../assets/service-icon2.png";
import Serviceicon3 from "../../assets/service-icon3.png";
import Serviceicon4 from "../../assets/service-icon4.png";
import circleright from "../../assets/circle-bg-left-img.png";
import halfcircle from "../../assets/half-circle-left-icon.png";
import curn from "../../assets/curn-icon.png";
import portfolioImage1 from "../../assets/img1.png";
import portfolioImage2 from "../../assets/img2.png";
import portfolioImage3 from "../../assets/img3.png";
import portfolioImage4 from "../../assets/img4.png";
import portfolioImage5 from "../../assets/img5.png";
import testBanner from "../../assets/tastimonials-img.png";
import commaImg from "../../assets/comma-icon.png";
import blog1 from "../../assets/blog-img-1.png";
import blog2 from "../../assets/blog-img-2.png";
import blog3 from "../../assets/blog-img-3.png";
import halfcircleright from "../../assets/circle-bg-img.png";

import Typed from "typed.js";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Index = () => {
  const el = useRef();
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        "https://newsdata.io/api/1/latest?apikey=pub_074948753817496995cc526ccb35a5b0&q=technology"
      );
      const data = await response.json();
      setNewsData(data.results || []);
    } catch (error) {
      console.error("Failed to fetch news data:", error);
      setNewsData([]);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d82dbda-c7ad-41f8-b32b-7890af4391d1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully!",
        icon: "success",
      });
      event.target.reset();
    } else {
      console.log("Error", data);
    }
  };

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Prem Kumar"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <>
      {/* Header */}
      <div className="header" id="Home">
        <div className="container header-container position-relative">
          <div className="row align-items-center">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.2 }}
            >
              <div className="header-content">
                <h2>Hello, I Am</h2>
                <h1 className="text" ref={el}></h1>
                <p>FrontEnd and BackEnd Developer.</p>
                <div className="hero-btn mt-4">
                  <button className="btn hire-btn">
                    <a href="#Contact" className="line">
                      Hire Me!
                    </a>
                  </button>
                  <a href="#portfolio" className="work-link ms-4">
                    See My work
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="col-lg-6 position-relative header-image-wrap"
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1.2 }}
            >
              <div className="header-image">
                <img src={hero1} alt="" className="img-fluid" />
              </div>
              <motion.div
                className="hero-card-box d-flex align-items-center gap-2 position-absolute"
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.6 }}
              >
                <img src={cardboximg1} alt="cup-img" className="img-fluid" />
                <h2 className="mt-2">
                  Best Design <br />
                  Award.
                </h2>
              </motion.div>
              <motion.div
                className="hero-card-box hero-card-box2 d-flex align-items-center gap-2 position-absolute flex-column"
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1.6 }}
              >
                <img src={cardboximg2} alt="" className="img-fluid" />
                <h3>5K+</h3>
                <h2 className="mt-2">
                  Happy <br />
                  Customers.
                </h2>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="hero-social d-flex flex-column gap-3 position-absolute"
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <a href="https://x.com/redzking002?t=QBQIMC94pPLgVROrkNX5vg&s=08" >
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
          <img
            src={shape1}
            alt=""
            className="hero-shape hero-shape1 img-fluid position-absolute"
          />
          <img
            src={shape2}
            alt=""
            className="hero-shape hero-shape2 img-fluid position-absolute"
          />
          <img
            src={shape3}
            alt=""
            className="hero-shape hero-shape3 img-fluid position-absolute"
          />
        </div>
      </div>

      {/* Expertise */}
      <div
        className="Service"
        id="Service"
        style={{ backgroundColor: "#fcfcff" }}
      >
        <motion.div
          className="section-title text-center mt-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h6 className="text-primary fw-bold">My Expertise</h6>
          <h2 className="fw-bold" style={{ color: "#3f396d" }}>
            Provide Wide Range of <br />
            Digital Services
          </h2>
        </motion.div>
        <div className="container mt-5">
          <motion.div
            className="row m-auto col-md-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* card 1 */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-sm border rounded-4 p-4 ServiceCard">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "110px",
                        height: "110px",
                        backgroundColor: "#f5f7ff",
                      }}
                    >
                      <img src={Serviceicon1} alt="" width={"50px"} />
                    </div>
                  </div>
                  <div className="col-md-8 mt-md-0 mt-4">
                    <div className="fw-bold">UI/UX Design</div>
                    <p className="text-muted mb-2">
                      Creating intuitive and engaging user experiences through
                      thoughtful interface design that puts your users first.
                    </p>
                    <a href="#" target="_blank">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-sm border rounded-4 p-4 ServiceCard">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "110px",
                        height: "110px",
                        backgroundColor: "#f5f7ff",
                      }}
                    >
                      <img src={Serviceicon2} alt="" width={"50px"} />
                    </div>
                  </div>
                  <div className="col-md-8 mt-md-0 mt-4">
                    <div className="fw-bold">Web Design</div>
                    <p className="text-muted mb-2">
                      Crafting beautiful and responsive websites that capture
                      your brand identity and deliver seamless user experiences.
                    </p>
                    <a href="#" target="_blank">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="row m-auto col-md-10"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* card 3 */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-sm border rounded-4 p-4 ServiceCard">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "110px",
                        height: "110px",
                        backgroundColor: "#f5f7ff",
                      }}
                    >
                      <img src={Serviceicon3} alt="" width={"50px"} />
                    </div>
                  </div>
                  <div className="col-md-8 mt-md-0 mt-4">
                    <div className="fw-bold">Web Development</div>
                    <p className="text-muted mb-2">
                      Building robust and scalable web applications with clean
                      code and modern technologies to bring your ideas to life.
                    </p>
                    <a href="#" target="_blank">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="col-lg-6 col-md-12 mb-4">
              <div className="card h-100 shadow-sm border rounded-4 p-4 ServiceCard">
                <div className="row align-items-center">
                  <div className="col-md-4 text-center">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "110px",
                        height: "110px",
                        backgroundColor: "#f5f7ff",
                      }}
                    >
                      <img src={Serviceicon4} alt="" width={"50px"} />
                    </div>
                  </div>
                  <div className="col-md-8 mt-md-0 mt-4">
                    <div className="fw-bold">App Development</div>
                    <p className="text-muted mb-2">
                      Developing high-performance mobile applications for iOS
                      and Android that deliver exceptional user experiences.
                    </p>
                    <a href="#" target="_blank">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <img src={circleright} alt="" className="circleright" />
        <img src={halfcircle} alt="" className="halfcircle" />
        <img src={curn} alt="" className="curn" />
      </div>

      {/* Skills */}
      <div className="skills mt-5 py-5" id="About">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="row g-4">
                <motion.div
                  className="col-md-6"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="skills-card">
                    <div className="progress-circle">
                      <svg width="120" height="120">
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#f39c12"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="78.5"
                        />
                        <text x="60" y="65" textAnchor="middle" fill="#f39c12">
                          75%
                        </text>
                      </svg>
                    </div>
                    <p>Graphic Design</p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-md-6"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="skills-card">
                    <div className="progress-circle">
                      <svg width={"120"} height={"120"}>
                        <circle
                          cx={"60"}
                          r={"50"}
                          cy="60"
                          stroke="#46f312ff"
                          strokeWidth={"8"}
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="15.7"
                        ></circle>
                        <text x={"60"} y={"65"} fill="#46f312ff">
                          95%
                        </text>
                      </svg>
                    </div>
                    <p>Web Design</p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-md-6"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="skills-card">
                    <div className="progress-circle">
                      <svg width={"120"} height={"120"}>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#141a92ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="47.1"
                        ></circle>
                        <text x={"60"} y={"65"} fill="#141a92ff">
                          85%
                        </text>
                      </svg>
                    </div>
                    <p>Branding Design</p>
                  </div>
                </motion.div>
                <motion.div
                  className="col-md-6"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <div className="skills-card">
                    <div className="progress-circle">
                      <svg width={"120"} height={"120"}>
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#f31270ff"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray="314"
                          strokeDashoffset="62.8"
                        ></circle>
                        <text x={"60"} y={"65"} fill="#f31270ff">
                          80%
                        </text>
                      </svg>
                    </div>
                    <p>Web Development</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              className="col-lg-6 d-flex align-items-center"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="section-title skills-title text-center mt-5">
                <h6 className="text-primary fw-bold text-start">My Skills</h6>
                <h2 className="fw-bold text-start" style={{ color: "#3f396d" }}>
                  Beautiful & Unique Digital Experiences
                </h2>
                <p className="text-start">
                  I specialize in creating modern, responsive web applications
                  with a focus on clean code and exceptional user experiences.
                  Proficient in React, JavaScript, and modern web technologies,
                  I bring ideas to life through innovative solutions and
                  attention to detail.
                </p>
                <a className="btn skills-btn mt-3" href={Resume} target="_blank">Download CV</a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="portfolio" id="portfolio">
        <div className="portfolio-top">
          <div className="container">
            <motion.div
              className="section-title text-center mt-5"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h6 className="text-white fw-bold">Creative Works</h6>
              <h2 className="fw-bold text-white">Check My Portfolio</h2>
            </motion.div>
            <motion.div
              className="text-center w-100 d-flex justify-content-center gap-3 gap-lg-5 flex-wrap"
              id="Portfolio"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <button
                className="active active-btn portfolio-btn"
                onClick={"filterSelection('all')"}
                id="portfoliobtn"
              >
                All
              </button>
              <button className="portfolio-btn">Products</button>
              <button className="portfolio-btn">Web App</button>
              <button className="portfolio-btn">Interaction</button>
              <button className="portfolio-btn">Brand Identity</button>
            </motion.div>

            <motion.div
              className="portfolio-wrapper pt-5"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="row">
                <div className="col-12 col-lg-8 mb-3">
                  <div className="portfolio-image">
                    <img src={portfolioImage1} alt="" />
                    <div className="portfolio-img-title">
                      <div className="portfolio-info">
                        <h4>Quiz Website</h4>
                        <p>A Quiz website for brian Stroming.</p>
                      </div>
                      <a
                        href="https://quiztaskmaster.netlify.app/"
                        target="_blank"
                        className="line"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 mb-3 portfolio-hide">
                  <div className="portfolio-image">
                    <img src={portfolioImage2} alt="" />
                    <div className="portfolio-img-title">
                      <div className="portfolio-info">
                        <h4>Resume Builder</h4>
                        <p>Build ATS Friendly Resume Here!</p>
                      </div>
                      <a
                        href="https://resume-builder-tcde.onrender.com/"
                        target="_blank"
                        className="line"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <div className="portfolio-image">
                    <img src={portfolioImage3} alt="" />
                    <div className="portfolio-img-title">
                      <div className="portfolio-info">
                        <h4>Gamer Zone</h4>
                        <p>A Gaming website landing page with 3d characters.</p>
                      </div>
                      <a
                        href="https://webgamerx.netlify.app/"
                        target="_blank"
                        className="line"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="portfolio-image">
                    <img src={portfolioImage4} alt="" />
                    <div className="portfolio-img-title">
                      <div className="portfolio-info">
                        <h4>3D Portfolio</h4>
                        <p>A portfolio built on using React Three js</p>
                      </div>
                      <a
                        href="https://portfoilio3d.netlify.app/"
                        target="_blank"
                        className="line"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <div className="portfolio-image">
                    <img src={portfolioImage5} alt="" />
                    <div className="portfolio-img-title">
                      <div className="portfolio-info">
                        <h4>Bazario - Ecommerce Site</h4>
                        <p>
                          Full Stack Ecommerce Site - Come and Shop with Us.
                        </p>
                      </div>
                      <a
                        href="https://bazario-6kz8.onrender.com/"
                        target="_blank"
                        className="line"
                      >
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial mt-5 pb-5 position-relative" id="Testimonial">
        <img
          src={shape4}
          alt=""
          className="img-fluid test-shape1 position-absolute"
        />
        <img
          src={shape2}
          alt=""
          className="img-fluid test-shape2 position-absolute"
        />

        <div className="container ">
          <div className="row">
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="test-banner d-flex align-items-center justify-content-center">
                <img src={testBanner} alt="" className="img-fluid" />
              </div>
            </motion.div>

            {/* test slider */}
            <motion.div
              className="col-lg-6 test-wrapper position-relative"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <Swiper
                className="swiper test-swiper"
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                modules={[Navigation]}
              >
                <SwiperSlide>
                  <div className="test-card">
                    <h5>Testimonials</h5>
                    <h2>Happy Client Feedback</h2>
                    <div className="test-card-pere d-flex align-items-start gap-2 mt-3">
                      <img src={commaImg} alt="" className="img-fluid" />
                      <div className="test-info">
                        <p>
                          Reliable, fast, and packed with features. It’s exactly
                          what we needed.
                        </p>
                        <h3>Harshit</h3>
                        <p>Developer at Deloitte</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-prev">
                <i className="ri-arrow-left-line"></i>
              </div>
              <div className="swiper-button-next">
                <i className="ri-arrow-right-line"></i>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Blog */}
      <div className="blog mt-5 py-5 position-relative" id="Blog">
        <motion.div className="section-title text-center mt-5">
          <h5 className="text-primary fw-bold">Latest News</h5>
          <h2 className="fw-bold" style={{ color: "#3f396d" }}>
            Blog & Articles
          </h2>
        </motion.div>
        <motion.div
          className="container mt-5"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <div className="row g-4">
            {newsData.slice(0, 3).map((article, index) => {
              // Fallback images array
              const fallbackImages = [blog1, blog2, blog3];
              const fallbackImage = fallbackImages[index % 3];

              return (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="blog-card overflow-hidden shadow-sm d-flex flex-column h-100">
                    <div style={{ height: "250px", overflow: "hidden" }}>
                      <img
                        src={article.image_url || fallbackImage}
                        alt={article.title || "Blog image"}
                        className="img-fluid blog-img w-100 h-100"
                        style={{ objectFit: "cover" }}
                        onError={(e) => {
                          e.target.src = fallbackImage;
                        }}
                      />
                    </div>
                    <div className="blog-content mt-1 p-3 d-flex flex-column flex-grow-1">
                      <div className="d-flex justify-content-between w-100 mb-2">
                        <a
                          href="#"
                          className="author text-truncate"
                          style={{ maxWidth: "60%" }}
                        >
                          By {article.source_id || "Author"}
                        </a>
                        <span className="date text-nowrap">
                          {article.pubDate
                            ? article.pubDate.slice(0, 10)
                            : "N/A"}
                        </span>
                      </div>
                      <h5
                        className="card-title mt-2"
                        style={{
                          minHeight: "3rem",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.title || "No title available"}
                      </h5>
                      <p
                        className="card-text my-2 flex-grow-1"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {article.description || "No description available"}
                      </p>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="read-more mt-auto"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <img src={shape1} alt="" className="blog-shape1 position-absolute" />
        <img src={shape2} alt="" className="blog-shape2 position-absolute" />
        <img
          src={halfcircleright}
          alt=""
          className="blog-shape3 position-absolute"
        />
      </div>

      {/* contact */}
      <div className="contact mt-5 pb-5 position-relative" id="Contact">
        <div className="container">
          <div className="contact-top">
            <motion.div
              className="section-title text-center mt-5"
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h6 className="text-primary fw-bold">Get In Touch</h6>
              <h2 className="fw-bold" style={{ color: "#3f396d" }}>
                Any Questions? Feel Free <br />
                to Contact
              </h2>
            </motion.div>
          </div>

          <div className="row g-4 mt-4">
            {/* Contact Info Cards */}
            <motion.div
              className="col-lg-4 col-md-6 contact-card"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="contact-box mb-4 d-flex gap-3">
                <i className="ri-map-pin-line d-inline-flex justify-content-center align-items-center"></i>
                <div className="contact-info">
                  <h5 className="mb-1">Address :</h5>
                  <p className="mb-0">
                    #1659,Chaitra nilaya, ullal upanagara, banglore,karnataka ,
                    India - 560110
                  </p>
                </div>
              </div>

              <div className="contact-box mb-4 d-flex gap-3">
                <i className="ri-mail-line d-inline-flex justify-content-center align-items-center"></i>
                <div className="contact-info">
                  <h5 className="mb-1">Email :</h5>
                  <p className="mb-0">codewithredz@gmail.com</p>
                </div>
              </div>

              <div className="contact-box mb-4 d-flex gap-3">
                <i className="ri-phone-line d-inline-flex justify-content-center align-items-center"></i>
                <div className="contact-info">
                  <h5 className="mb-1">Phone :</h5>
                  <p className="mb-0">+91-9148823837</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="col-lg-8 col-md-12"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="contact-form">
                <form className="row g-3" onSubmit={onSubmit}>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="5"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-submit">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
