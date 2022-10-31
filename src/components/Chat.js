import { useState } from "react";
import classes from "./Chat.module.css";

const Chat = (props) => {
  return (
    <div className={classes.chat}>
      <div className={classes.messages}>
        {props.messages.map((message, i) => (
          <p
            key={i}
            className={`${classes.message} ${
              message.id === props.myId
                ? classes["my-message"]
                : classes["other-message"]
            }`}
          >
            {message.network
              ? `${message.user} ${message.content}`
              : `${message.user} (${message.timestamp}): ${message.content}`}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
