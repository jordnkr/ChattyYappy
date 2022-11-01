import { useState } from "react";
import classes from "./Chat.module.css";
import Message from "./Message";

const Chat = (props) => {
  return (
    <div className={classes.chat}>
      <div className={classes.messages}>
        {props.messages.map((message, i) => (
          <Message
            key={i}
            messageId={message.id}
            myId={props.myId}
            network={message.network}
            user={message.user}
            timestamp={message.timestamp}
            content={message.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
