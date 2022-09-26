import React from 'react';
import "./styles/style.css";

//JSX class => 改成className
//由Info.js主導Message.js,產生結果
//msg就係input輸入的值, 然後顯示出來;
//props: messages: 就係字串;
//props: msg : input的值;
//props:setMessages :
const Message = ({ msg, messages, setMessages }) => {

  const deleteHandler = () => {
    //callback function 對msg是否相同??
    setMessages(messages.filter((m) => m !== msg));
  }

  return (
  <div className= "msg"> 
    <p>{msg}</p>
    <button onClick={deleteHandler}>Deleteee</button>
 </div>
 );
};

export default Message;