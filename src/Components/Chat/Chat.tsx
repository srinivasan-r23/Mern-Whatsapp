import Body from "./Body/Body";
import classes from "./Chat.module.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Chat = () => {
  return (
    <div className={classes.chat}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Chat;
