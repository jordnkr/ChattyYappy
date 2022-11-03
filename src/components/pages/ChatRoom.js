import React from "react";
import { useParams } from "react-router-dom";
import useMessage from "../../hooks/use-message";
import Chat from "../Chat";
import MessageInput from "../MessageInput";
import RoomInfo from "../RoomInfo";
import ChatContainer from "../UI/ChatContainer";
import Users from "../Users";

import classes from "./ChatRoom.module.css";

const ChatRoom = () => {
  const room = useParams().room;
  const { chatMessages, users, sendMessage } = useMessage(room);

  return (
    <div className={classes.room}>
      <div className={classes.contain}>
        <RoomInfo roomName={room} userCount={users.length} />
        <div className={classes.content}>
          <Users users={users} />
          <ChatContainer>
            <Chat messages={chatMessages} onSend={sendMessage} />
            <MessageInput onSend={sendMessage} />
          </ChatContainer>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
