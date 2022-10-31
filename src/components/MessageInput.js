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
    <div>
      <input
        placeholder="message..."
        value={message}
        onChange={messageChangeHandler}
      />
      <button onClick={sendMessageHandler}>Send</button>
    </div>
  );
};

export default MessageInput;
