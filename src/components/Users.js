import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((user, i) => (
        <p key={i} className={classes.user}>
          {user}
        </p>
      ))}
    </div>
  );
};

export default Users;
