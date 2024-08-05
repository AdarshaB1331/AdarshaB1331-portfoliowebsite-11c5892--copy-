import React from "react";

const Footer = () => {
  return (
    <footer
      className="VAVA d-flex flex-wrap justify-content-between align-items-center py-1 border-top"
      style={{ color: "white" }}
    >
      <header className="d-flex flex-wrap justify-content-center py-1 mb-2">
        <a
          href="/"
          className="d-flex align-items-center mb-1 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width="40" height="32">
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span
            className="fs-4"
            style={{
              textAlign: "center",
              marginLeft: "300px",
              marginTop: "50px",
              color: "white",
            }}
          >
            ADARSHA BASKOTA © 2024 copyright all right reserved
          </span>
        </a>
      </header>
    </footer>
  );
};

export default Footer;
