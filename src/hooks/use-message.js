import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:4000";

const useMessage = (room) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [userId, setUserId] = useState(Math.floor(Math.random() * Date.now()));
  let socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: {
        room: room,
      },
    });

    socketRef.current.emit("new-message", [
      userId,
      `Anonymous${userId} joined the chat`,
    ]);

    // receive a message from the server
    socketRef.current.on("mail-delivery", (message) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { id: message[0], content: message[1] },
      ]);
    });

    return () => {
      socketRef.current.emit("new-message", [
        userId,
        `Anonymous${userId} left the chat`,
      ]);
      socketRef.current.disconnect();
    };
  }, [room, userId]);

  const sendMessage = (message) => {
    // send a message to the server
    socketRef.current.emit("new-message", [userId, message]);
  };

  return {
    chatMessages,
    userId,
    sendMessage,
  };
};

export default useMessage;
