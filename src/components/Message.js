import React from "react";

const Message = ({ myName }) => {
  return (
    <div>
      <p>Hello, {myName}</p>
    </div>
  );
};

Message.defaultProps = {
  myName: "EMNA",
};

export default Message;
