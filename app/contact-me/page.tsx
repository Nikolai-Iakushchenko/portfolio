import React from "react";
import classes from "./contact-me.module.css";

const ContactMe = () => {
  return (
    <div className={classes.contactContainer}>
      <h2> Get in Touch</h2>
      <p>
        If you want us to work together, or have any questions , my inbox is
        always open. Whether you just want to say hi, I&apos;ll try my best to
        get back to you! Cheers!
      </p>
      <a href="mailto:nikolai.iakushchenko@gmail.com" className="ctaBtn">
        Say Hello
      </a>
    </div>
  );
};

export default ContactMe;
