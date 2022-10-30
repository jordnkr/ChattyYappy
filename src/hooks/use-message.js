import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const SERVER_URL = "http://localhost:4000";
//const SERVER_URL = "https://chat-server-jk3lh509uq2j34qag4.herokuapp.com";

const useMessage = (room) => {
  const [chatMessages, setChatMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("");
  let socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SERVER_URL, {
      query: {
        room: room,
      },
    });

    socketRef.current.on("id-delivery", (message) => {
      setUserId(message);
      console.log(message);
    })

    // receive a message from the server
    socketRef.current.on("mail-delivery", (message) => {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { id: message[0], content: message[1] },
      ]);
    });

    socketRef.current.on("user-update", (users) => {
      setUsers(users);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, [room]);

  const sendMessage = (message) => {
    // send a message to the server
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
