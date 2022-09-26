import React from "react";
import Message from "./Message";

const Info = ({ messages, setMessages }) => {
  return (
    <div>
      {messages.map((msg) => (
       <Message
        msg={msg.input}  //呢度用左uuid, Create.js果part.
        messages={messages}
        setMessages={setMessages}
        key={msg.id}
       /> //出現番<p>{msg}</p>
       ))}
    </div>
    );
};

export default Info;