import React from "react";
import { Link } from "react-router-dom";
import classes from "./RoomInfo.module.css";

const RoomInfo = (props) => {
  return (
    <div className={classes.info}>
      <h2>Room: {props.roomName}</h2>
      <div className={classes.leave}>
        <Link className={classes.btn} to={"/ChattyYappy"}>Leave Room</Link>
      </div>
      <p className={classes["mobile-count"]}>Users in room: {props.userCount}</p>
    </div>
  );
};

export default RoomInfo;
