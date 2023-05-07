import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

//const SERVER_URL = "http://localhost:4000";
const SERVER_URL = "https://hilarious-bublanina-58b9d7.netlify.app";

const useMessage = (room) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [users, setUsers] = useState([]);
  let socketRef = useRef();

  const updateMessages = (messageInfo, connectChange) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        user: messageInfo[0],
        content: messageInfo[1],
        isMine: messageInfo[2] === socketRef.current.id,
        network: connectChange,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: {
        room: room,
      },
    });

    // new user connection
    socketRef.current.on("user-connect", (messageInfo) => {
      updateMessages(messageInfo, true);
    });

    socketRef.current.on("user-disconnect", (messageInfo) => {
      updateMessages(messageInfo, true);
    });

    socketRef.current.on("user-update", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // receive a message from the server
    socketRef.current.on("mail-delivery", (messageInfo) => {
      updateMessages(messageInfo, false);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [room]);

  // send a message to the server
  const sendMessage = (message) => {
    socketRef.current.emit("new-message", message);
  };

  return {
    chatMessages,
    users,
    sendMessage,
  };
};

export default useMessage;
