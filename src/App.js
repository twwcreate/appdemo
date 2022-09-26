/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Create from "./Create";
import Info from "./Info";

const App = () => {
  let [messages, setMessages] = useState([]);
  return ( 
  <div>
    <Create messages={messages} setMessages={setMessages} />
    <Info messages={messages} setMessages={setMessages} />
    
  </div> 
  );
};

export default App;