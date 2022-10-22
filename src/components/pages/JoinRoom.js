import React from "react";
import Title from "../UI/Title";

const JoinRoom = () => {
  const [roomName, setRoomName] = useState("");

  const roomChangeHandler = (event) => {
    setRoomName(event.target.value);
  };

  return (
    <>
      <Title />
      <label>
        Room Name
        <input type="text" onChange={roomChangeHandler} value={roomName} />
      </label>
    </>
  );
};

export default JoinRoom;
