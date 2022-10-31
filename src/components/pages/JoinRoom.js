import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./JoinRoom.module.css";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");

  const roomChangeHandler = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <div className={classes.contain}>
      <div className={classes.form}>
        <label className={classes["room-label"]}>
          Room Name
          <input
            type="text"
            onChange={roomChangeHandler}
            value={roomName}
            className={classes["room-input"]}
          />
        </label>
        <Link
          to={`/ChattyYappy/${roomName}`}
          className={classes["join-button"]}
        >
          Join Room
        </Link>
      </div>
    </div>
  );
};

export default JoinRoom;
