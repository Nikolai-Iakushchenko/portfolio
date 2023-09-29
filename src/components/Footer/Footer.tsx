import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Nik&apos;s Portfolio</p>
        <div className="social_icons">
          <a
            href="#"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*<i className="fa-brands fa-github"></i>*/}
            GitHub
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*<i className="fa-brands fa-linkedin"></i>*/}
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
