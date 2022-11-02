import React, { useState } from 'react';
import classes from "./MessageInput.module.css";

const MessageInput = (props) => {
  const [message, setMessage] = useState("");

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  };

  const sendMessageHandler = () => {
    props.onSend(message);
    setMessage("");
  };

  return (
    <div className={classes.input}>
      <textarea
        placeholder="message..."
        value={message}
        className={classes.text}
        onChange={messageChangeHandler}
      />
      <button onClick={sendMessageHandler} className={classes.send}>Send</button>
    </div>
  );
};

export default MessageInput;
