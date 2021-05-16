import { Avatar } from "@material-ui/core";
import { auth } from "../../../../firebase";

const IconLeft = () => {
  return (
    <Avatar style={{ cursor: "pointer" }} onClick={() => auth.signOut()}>
      SR
    </Avatar>
  );
};

export default IconLeft;
