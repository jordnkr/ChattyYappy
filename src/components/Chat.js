import { useState } from "react";
import classes from "./Chat.module.css";

const Chat = (props) => {
  const [message, setMessage] = useState("");

  const messageChangeHandler = (event) => {
    setMessage(event.target.value);
  }

  const sendMessageHandler = () => {
    props.onSend(message);
    setMessage("");
  }

  return (
    <>
      <div className={classes.messages}>
        {props.messages.map((message, i) => (
          <p key={i} className={classes.message}>{message}</p>
        ))}
      </div>
      <div>
        <input placeholder="message..." value={message} onChange={messageChangeHandler} />
        <button onClick={sendMessageHandler}>Send</button>
      </div>
    </>
  );
};

export default Chat;
