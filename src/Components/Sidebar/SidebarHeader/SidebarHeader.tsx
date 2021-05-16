import IconLeft from "./IconLeft/IconLeft";
import IconRight from "./IconRight/IconRight";
import classes from "./SidebarHeader.module.css";

const SidebarHeader = () => {
  return (
    <div className={classes.sidebar__Header}>
      <IconLeft />
      <IconRight />
    </div>
  );
};

export default SidebarHeader;
