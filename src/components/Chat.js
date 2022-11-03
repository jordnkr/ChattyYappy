import React from "react";

import classes from "./Chat.module.css";
import Message from "./Message";

const Chat = (props) => {
  return (
    <div className={classes.chat}>
      <div className={classes.messages}>
        {props.messages.map((message, i) => (
          <Message
            key={i}
            user={message.user}
            content={message.content}
            timestamp={message.timestamp}
            isMine={message.isMine}
            network={message.network}
          />
        ))}
      </div>
    </div>
  );
};

export default Chat;
