import React, { createContext, useState, useEffect } from "react";
import { IMessage, getEndpoint, BASE_URL } from "./App";
import Pusher, { Channel } from "pusher-js";

type MessageContextObj = {
  msg: IMessage[];
};

export const MessageContext = createContext<MessageContextObj>({
  msg: [],
});

const MessageContextProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const loadData = async () => {
    await fetch(BASE_URL + `${getEndpoint}`)
      .then((response) => {
        if (response.ok) return response.json();
        else throw new Error("Error !!! while fetching the data from database");
      })
      .then((data) => {
        console.log(data);
        setMessages(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const pusher: Pusher = new Pusher("be5e8946a51a1c8e24fc", {
      cluster: "ap2",
    });
    const channel: Channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage: IMessage) => {
      setMessages([...messages, newMessage]);
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <MessageContext.Provider value={{ msg: messages }}>
      {children}
    </MessageContext.Provider>
  );
};
export default MessageContextProvider;
