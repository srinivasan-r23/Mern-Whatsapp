import { IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

const HeaderRightIcons = () => {
  return (
    <>
      <IconButton>
        <SearchOutlined />
      </IconButton>
      <IconButton>
        <AttachFile />
      </IconButton>
      <IconButton>
        <MoreVert />
      </IconButton>
    </>
  );
};

export default HeaderRightIcons;
