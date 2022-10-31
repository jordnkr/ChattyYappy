import React from "react";
import classes from "./Users.module.css";

const Users = (props) => {
  return (
    <div className={classes.users}>
      <p>Users in room: {props.users.length ? props.users.length : ''}</p>
      <div>
        {props.users.map((user, i) => (
          <p key={i} className={classes.user}>
            {user}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
