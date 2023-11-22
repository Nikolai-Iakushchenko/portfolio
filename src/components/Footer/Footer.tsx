import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Nik&apos;s Portfolio</p>
        <div className="social_icons">
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
