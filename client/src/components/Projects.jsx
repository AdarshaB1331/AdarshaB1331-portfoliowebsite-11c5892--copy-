import React from "react";

const Projects = () => {
  return (
    <>
      <div id="projects">
        <div
          style={{ display: "flex", textAlign: "center", marginTop: "139px" }}
        >
          <h1
            style={{
              marginLeft: "400px",
              fontSize: "55px",
              color: "rgb(7, 136, 255)",
              textAlign: "center",
            }}
          >
            RECENT
          </h1>
          <h1
            style={{
              marginLeft: "30px",
              fontSize: "55px",
              color: "white",
              textAlign: "center",
            }}
          >
            PROJECTS
          </h1>
        </div>

        <div
          className="card"
          style={{
            width: "24rem",
            marginLeft: "190px",
            marginTop: "90px",
            borderWidth: "7px",
            borderStyle: "solid",
            borderColor: "white",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <img src="a.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 style={{ marginTop: "40px" }} className="card-title">
              Blog Website
            </h5>
            <p
              style={{ color: "black", marginTop: "20px" }}
              className="card-text"
            >
              This is a simple blog application created by me feel free to check
              it out........
            </p>
            <a
              style={{ marginTop: "20px" }}
              href="https://adarsharealblog-wj08.onrender.com"
              target="_blank"
              className="btn btn-primary"
              rel="noopener noreferrer"
            >
              Check out my project
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
