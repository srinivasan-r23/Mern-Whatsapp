import classes from "./IconRight.module.css";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles({
  icons: {
    marginRight: "2vw",
    fontSize: "24px",
  },
});
const IconRight = () => {
  const styles = useStyles();
  return (
    <div className={classes.IconRight}>
      <IconButton className={styles.icons}>
        <DonutLargeIcon />
      </IconButton>
      <IconButton className={styles.icons}>
        <ChatIcon />
      </IconButton>
      <IconButton className={styles.icons}>
        <MoreVertIcon />
      </IconButton>
    </div>
  );
};

export default IconRight;
