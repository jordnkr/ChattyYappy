import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <div
      className={`${classes.message} ${
        props.messageId === props.myId
          ? classes["my-message"]
          : classes["other-message"]
      }`}
    >
      {props.network && `${props.user} ${props.content}`}
      {!props.network && `${props.user} (${props.timestamp}): ${props.content}`}
    </div>
  );
};

export default Message;
