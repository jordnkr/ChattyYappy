import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "https://chat-server-jk3lh509uq2j34qag4.herokuapp.com";

const useMessage = (room) => {
  const [chatMessages, setChatMessages] = useState([]);
  let socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: {
        room: room,
      },
    });

    // receive a message from the server
    socketRef.current.on("mail delivery", (message) => {
      setChatMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [room]);

  const sendMessage = (message) => {
    // send a message to the server
    socketRef.current.emit("new message", message);
  };

  return {
    chatMessages,
    sendMessage
  }
};

export default useMessage;
