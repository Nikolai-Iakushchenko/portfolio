import classes from "./app.module.css";
import Image from "next/image";
import profilePic from "../src/assets/profile-img.jpeg";

export default function Home() {
  return (
    <div className={classes.homeContainer}>
      <Image
        src={profilePic}
        alt="Profile Image"
        width={300}
        height={300}
        className={classes.profileImg}
      />
      <div className={classes.homeText}>
        <h1>Hey, I&apos;m Nik</h1>
        <p>
          I&apos;m a frontend developer based in Izmir, Turkey. I specialize in
          building SPA web applications with React.
        </p>
        <div className={classes.socialIcons}>
          <a
            href="https://github.com/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*<i className="fa-brands fa-github"></i>*/}
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/*<i className="fa-brands fa-linkedin"></i>*/}
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
