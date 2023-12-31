import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
    const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Kesa hai thu !!!..",
    },
    {
      name: "Ellen",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      message: "Kuch tho bol sab tikh hai na",
    },
    {
      message: "theri yaad aa rahi hai  !..",
    },
  ]);

  const handleSend = e => {
      e.preventDefault();

      setMessages([...messages, { message: input }])
      setInput("");
  }



  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">
        YOU MATCHED WITH ISHA ON 10/01/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      
        <form className="chatScreen__input">
          <input
          value={input}
          onChange={e => setInput(e.target.value)}
            className="chatScreen__inputField"
            placeholder="Type a Message...."
            type="text"
          />
          <button onClick={handleSend} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
    </div>
  );
}

export default ChatScreen;
