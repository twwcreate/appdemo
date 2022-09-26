/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Create = ({ messages, setMessages }) => {
    let [input, setInput ] = useState("");
    

    const submitHandler = (e) => {
        e.preventDefault();
        // setMessages([...messages, input]);
        setMessages([...messages, { input, id: uuidv4() }]);
        setInput("");
    };

    const inputHandler = (e) => {
        setInput(e.target.value);
        // console.log(e.target.value);
    };

    return (
        <form>
            {/* 執行inputHandler的function: */}
            <input onChange={inputHandler} value={input} type="text" />
             {/* 執行submitHandler的function: */}
            <button onClick={submitHandler}>Submittt</button>
        </form>
    );
};

export default Create;