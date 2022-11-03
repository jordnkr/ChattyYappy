import React from "react";
import classes from "./Message.module.css";

const Message = (props) => {
  return (
    <>
      {!props.network && (
        <p
          className={`${classes["message-user"]} ${
            props.messageId === props.myId
              ? classes["my-message-user"]
              : classes["other-message-user"]
          }`}
        >
          <b>{props.user}</b> ({props.timestamp})
        </p>
      )}
      <div
        className={`${classes.message} ${
          props.messageId === props.myId
            ? classes["my-message"]
            : classes["other-message"]
        }`}
      >
        {props.network && `${props.user} ${props.content}`}
        {!props.network && (
          <p className={classes["message-text"]}>{props.content}</p>
        )}
      </div>
    </>
  );
};

export default Message;
