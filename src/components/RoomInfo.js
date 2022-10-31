import React from "react";
import { Link } from "react-router-dom";
import classes from "./RoomInfo.module.css";

const RoomInfo = (props) => {
  return (
    <div className={classes.info}>
      <h2>Room: {props.roomName}</h2>
      <div className={classes.leave}>
        <Link to={"/ChattyYappy"}>Leave Room</Link>
      </div>
    </div>
  );
};

export default RoomInfo;