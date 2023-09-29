import React from "react";
import Link from "next/link";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo}>
        <Link href="/">Nik</Link>
      </div>
      <ul className={classes.navList}>
        <li className={classes.navListItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={classes.navListItem}>
          <Link href="/about">About</Link>
        </li>
        <li className={classes.navListItem}>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        {/*<li className={classes.navListItem}>*/}
        {/*  <Link href="/blog">Blog</Link>*/}
        {/*</li>*/}
        {/*<li className={classes.navListItem}>*/}
        {/*  <Link href="/resume">Resume</Link>*/}
        {/*</li>*/}
      </ul>
    </div>
  );
};

export default Navbar;
