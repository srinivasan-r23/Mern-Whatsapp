import React, { useState } from "react";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import classes from "./Form.module.css";
import { BASE_URL, postEndpoint } from "../../../../App";

const Form: React.FC<{
  inputType: string;
  placeholderText: string;
}> = (props) => {
  const [inputText, setInputText] = useState<string>("");

  const formHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(BASE_URL + `${postEndpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: inputText,
        name: "Me",
        timestamp: new Date().toLocaleString(),
        received: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    setInputText("");
  };

  return (
    <form className={classes.form} onSubmit={formHandler}>
      <input
        type={props.inputType}
        placeholder={props.placeholderText}
        className={classes.input}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <IconButton onClick={formHandler}>
        <SendIcon />
      </IconButton>
      {/*9:51*/}
    </form>
  );
};

export default Form;
