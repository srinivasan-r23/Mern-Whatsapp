import classes from "./Chats.module.css";
import SidebarChat from "./SidebarChat/SidebarChat";

const Chats = () => {
  return (
    <div className={classes.chats}>
      <SidebarChat />
      <SidebarChat />
    </div>
  );
};

export default Chats;
