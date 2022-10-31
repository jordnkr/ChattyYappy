import React from "react";
import classes from "./ChatContainer.module.css";

const ChatContainer = (props) => {
  return <div className={classes.group}>{props.children}</div>;
};

export default ChatContainer;
