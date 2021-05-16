import { Avatar } from "@material-ui/core";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import classes from "./Header.module.css";
import HeaderRightIcons from "./HeaderRight/HeaderRightIcons";

const Header = () => {
  return (
    <div className={classes.header}>
      <Avatar />
      <HeaderInfo />
      <HeaderRightIcons />
    </div>
  );
};

export default Header;
