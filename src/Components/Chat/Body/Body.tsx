import classes from "./Body.module.css";
import Message from "./Message/Message";

const Body = () => {
  return (
    <div className={classes.body}>
      <Message />
    </div>
  );
};

export default Body;
