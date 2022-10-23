import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./JoinRoom.module.css";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");

  const roomChangeHandler = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <>
      <label>
        Room Name
        <input type="text" onChange={roomChangeHandler} value={roomName} />
      </label>
      <div><Link to={`/ChattyYappy/${roomName}`}>Join Room</Link></div>
    </>
  );
};

export default JoinRoom;
