import { Avatar } from "@material-ui/core";
import classes from "./SidebarChat.module.css";

const SidebarChat: React.FC<{}> = () => {
  return (
    <div className={classes.sidebarChat}>
      <Avatar />
      <div className={classes.info}>
        <h2>Name</h2>
        <p>This is the message</p>
      </div>
    </div>
  );
};

export default SidebarChat;
