import Chats from "./Chats/Chats";
import Search from "./Search/Search";
import classes from "./Sidebar.module.css";
import SidebarHeader from "./SidebarHeader/SidebarHeader";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <SidebarHeader />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
