import { useContext } from "react";
import { MessageContext } from "../../../../auth-context";
import classes from "./Message.module.css";

const Message = () => {
  const ctx = useContext(MessageContext);
  return (
    <>
      {ctx.msg.map((message, index) => (
        <p
          key={message._id || index}
          className={`${classes.chatReceiver} ${
            message.received && classes.chatSender
          }`}
        >
          <span className={classes.name}>{message.name}</span>
          {message.message}
          <span className={classes.timeStamp}>{message.timestamp}</span>
        </p>
      ))}
    </>
  );
};

export default Message;
