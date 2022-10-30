import React from "react";
import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer}>
      <p>
        &copy;{" "}
        <a target="_blank" rel="noreferrer" href="https://github.com/jordnkr">
          jordnkr
        </a>
      </p>
    </div>
  );
};

export default Footer;
