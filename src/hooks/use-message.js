import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:4000";
//const SERVER_URL = "https://chat-server-jk3lh509uq2j34qag4.herokuapp.com";

const useMessage = (room) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  let socketRef = useRef();

  const updateMessages = (messageInfo) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { id: messageInfo[0], content: messageInfo[1] },
    ]);
  };

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: {
        room: room,
      },
    });

    socketRef.current.on("id-delivery", (message) => {
      setUserId(message);
      console.log(message);
    });

    // new user connection
    socketRef.current.on("new-connection", (messageInfo) => {
      updateMessages(messageInfo);
    });

    socketRef.current.on("user-update", (updatedUsers) => {
      setUsers(updatedUsers);
    });

    // receive a message from the server
    socketRef.current.on("mail-delivery", (messageInfo) => {
      updateMessages(messageInfo);
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
    userId,
    sendMessage,
  };
};

export default useMessage;
