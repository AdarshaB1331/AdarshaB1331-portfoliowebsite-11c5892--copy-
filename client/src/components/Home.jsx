import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Link, animateScroll as scroll } from "react-scroll";
import effectImage from "./effect-2.svg"; // Import the SVG image from the same folder

const Home = () => {
  return (
    <>
      <div id="home">
        <div>
          <h1
            style={{
              marginLeft: "80px",
              fontSize: "55px",
              marginTop: "100px",
              color: "lightgreen",
            }}
          >
            HEY! I’M ADARSHA BASKOTA
          </h1>
          <h1
            style={{
              marginLeft: "80px",
              fontSize: "55px",
              marginTop: "70px",
              color: "rgb(7, 136, 255)",
            }}
          >
            I'M A {""}
            <ReactTyped
              style={{ color: "rgb(7, 136, 255)" }}
              strings={[
                " Front End Developer",
                "JavaScript Enthusiast",
                "React Specialist",
                "Frontend Architect",
              ]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar="|"
              showCursor={true}
            />
          </h1>
        </div>
        <div
          style={{ maxWidth: "700px", marginLeft: "80px", marginTop: "70px" }}
        >
          <p style={{ fontSize: "24px", color: "white" }}>
            I'm Adarsha Baskota, a passionate student pursuing a bachelor's in
            computer science. Currently, I'm honing my skills in React.js,
            striving to master it before exploring other technologies. My
            journey in web development is driven by a commitment to becoming
            proficient in the MERN stack. I aim to build a strong foundation in
            React, ensuring I'm well-versed in creating dynamic and efficient
            web applications. Some of the skills I'm familiar with include:
          </p>
        </div>
        {/* Use the imported image */}
        <img
          className="spin" // Apply the spin class here
          style={{ marginLeft: "1000px", marginTop: "-530px", width: "250px" }}
          src={effectImage} // Use the imported image here
          alt="Shape"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "0px",
            marginLeft: "390px",
          }}
        >
          <Link
            to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            style={{
              marginLeft: "-1080px",
              marginTop: "60px",
              color: "white",
              fontWeight: "bolder",
              fontSize: "1.2em",
              borderRadius: "20px",
              backgroundColor: "#007bff",
              transition: "background-color 0.3s ease",
              border: "none",
              padding: "10px 20px",
            }}
            type="button"
            className="btn btn-info"
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#0a1633";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#007bff";
            }}
          >
            GET IN TOUCH
          </Link>
          {/* Improved styling for social media icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "60px",
              marginTop: "60px",
            }}
          >
            <div
              style={{
                padding: "10px",
                marginRight: "10px",
                transition: "background-color 0.3s",
                borderRadius: "50%",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100088493269622"
                target="_blank"
              >
                <FaFacebook style={{ color: "#3b5998", fontSize: "34px" }} />
              </a>
            </div>
            <div
              style={{
                padding: "10px",
                marginRight: "10px",
                transition: "background-color 0.3s",
                borderRadius: "50%",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100088493269622"
                target="_blank"
              >
                <FaInstagram style={{ color: "#c32aa3", fontSize: "34px" }} />
              </a>
            </div>
            <div
              style={{
                padding: "10px",
                transition: "background-color 0.3s",
                borderRadius: "50%",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100088493269622"
                target="_blank"
              >
                <FaYoutube style={{ color: "#ff0000", fontSize: "34px" }} />
              </a>
            </div>
            <div
              style={{
                padding: "10px",
                transition: "background-color 0.3s",
                borderRadius: "50%",
              }}
            >
              <a
                href="https://www.facebook.com/profile.php?id=100088493269622"
                target="_blank"
              >
                <FaXTwitter style={{ color: "#ff0000", fontSize: "34px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
