import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 fixed-top ">
      <Link
        style={{
          color: "white",
          fontSize: "18px",
          position: "relative",
          cursor: "pointer",
        }}
        to="home"
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none "
      >
        <svg className="bi me-2" width="40" height="32">
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span style={{ color: "white" }} className="fs-4">
          ADARSHA BASKOTA
        </span>
      </Link>

      <ul
        className="nav nav-pills"
        style={{ marginRight: "auto", gap: "28px" }}
      >
        <li className="nav-item">
          <Link
            style={{
              color: "white",
              fontSize: "18px",
              position: "relative",
              cursor: "pointer",
            }}
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="nav-link"
          >
            HOME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "white",
              fontSize: "18px",
              position: "relative",
              cursor: "pointer",
            }}
            to="aboutme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="nav-link"
          >
            ABOUT ME
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={{
              color: "white",
              fontSize: "18px",
              position: "relative",
              cursor: "pointer",
            }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="nav-link"
          >
            PROJECTS
          </Link>
        </li>

        <li className="nav-item">
          <Link
            style={{
              color: "white",
              fontSize: "18px",
              position: "relative",
              cursor: "pointer",
            }}
            to="contactme"
            spy={true}
            smooth={true}
            offset={-70}
            duration={200}
            className="nav-link"
          >
            CONTACT ME
          </Link>
        </li>
      </ul>
      <Link
        style={{ marginRight: "40px" }}
        to="contactme"
        spy={true}
        smooth={true}
        offset={-70}
        duration={200}
      >
        <button
          style={{
            color: "white",
            fontWeight: "bolder",
            fontSize: "1.2em",
            borderRadius: "20px",
            backgroundColor: "#007bff",
            transition: "background-color 0.3s ease",
            border: "none",
            padding: "10px 20px",
            marginLeft: "-70px", // Adjusted margin-left to move the button more to the left
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
          Let's Talk
        </button>
      </Link>
    </header>
  );
};

export default Navbar;
