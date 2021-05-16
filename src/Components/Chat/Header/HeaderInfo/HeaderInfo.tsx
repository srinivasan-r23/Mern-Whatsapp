import classes from "./HeaderInfo.module.css";

const HeaderInfo = () => {
  return (
    <div className={classes.headerInfo}>
      <h3>Name</h3>
      <p>Last seen ...</p>
    </div>
  );
};

export default HeaderInfo;
