import React from "react";
import { Link, useParams } from "react-router-dom";
import useMessage from "../../hooks/use-message";
import Chat from "../Chat";

import classes from "./ChatRoom.module.css";

const ChatRoom = (props) => {
  const room = useParams().room;
  const { chatMessages, sendMessage } = useMessage(room);

  return (
    <>
      <div>
        <h2>You're in room: {room}</h2>
      </div>
      <div className={classes.leave}>
        <Link to={"/ChattyYappy"}>Leave Room</Link>
      </div>
      <Chat messages={chatMessages} onSend={sendMessage} />
    </>
  );
};

export default ChatRoom;
