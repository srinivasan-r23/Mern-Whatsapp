import Chat from "./Components/Chat/Chat";
import Sidebar from "./Components/Sidebar/Sidebar";
import classes from "./App.module.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import SignInScreen from "./Components/SignInScreen/SignInScreen";
import Loading from "./Loading";
import { useEffect, useState } from "react";
export interface IMessage {
  message: string;
  name: string;
  received: boolean;
  timestamp: string;
  __v?: number;
  _id?: string;
}
export const initialValue: IMessage = {
  message: "",
  name: "",
  received: false,
  timestamp: "",
  __v: 0,
  _id: "",
};
export const BASE_URL: string = "http://localhost:9000";
export const getEndpoint: string = "/messages/sync";
export const postEndpoint: string = "/messages/new";

const App = () => {
  const [loadingSpinner, setLoadingSpinner] = useState(true);
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    setTimeout(() => {
      setLoadingSpinner(false);
    }, 1000);
  }, [loading]);

  return (
    <div className={classes.app}>
      {loadingSpinner && <Loading />}
      {!user && <SignInScreen />}
      {loading && <Loading />}
      {user && (
        <div className={classes.app__body}>
          <Sidebar />
          <Chat />
        </div>
      )}
    </div>
  );
};

export default App;
