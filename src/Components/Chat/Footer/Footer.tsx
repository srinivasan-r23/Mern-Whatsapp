import { IconButton } from "@material-ui/core";
import { InsertEmoticon } from "@material-ui/icons";
import MicIcon from "@material-ui/icons/Mic";
import classes from "./Footer.module.css";
import Form from "./Form/Form";

const Footer: React.FC = () => {
  return (
    <div className={classes.Footer}>
      <IconButton>
        <InsertEmoticon />
      </IconButton>
      <Form inputType="text" placeholderText="Type a message" />
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
};

export default Footer;
