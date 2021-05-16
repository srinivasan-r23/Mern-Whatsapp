import { SearchOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import InputField from "./InputField/InputField";
import classes from "./Search.module.css";

const useStyles = makeStyles({
  searchIcon: {
    color: "gray",
    padding: "10px",
  },
});
const Search = () => {
  const styles = useStyles();
  return (
    <div className={classes.search}>
      <div className={classes.searchContainer}>
        <SearchOutlined className={styles.searchIcon} />
        <InputField customStyle={classes.inputField} placeHolderText="Search or Start New Chat"/>
      </div>
    </div>
  );
};

export default Search;
