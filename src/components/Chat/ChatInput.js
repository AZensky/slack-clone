import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { db } from "../../firebase";
import firebase from "firebase/compat/app";

function ChatInput({ channelName, channelId, chatRef }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      // We get the value of the input field at that point
      message: input,
      //   Getting the server timestamp ensures that people in different time zones will still have their messages organized properly
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "Alex Zelinsky",
      userImage:
        "https://media-exp1.licdn.com/dms/image/C5603AQGac6l9DxzgGQ/profile-displayphoto-shrink_200_200/0/1624600366869?e=1654128000&v=beta&t=Aszv58fDXMCU2IDa-tdiSVapuPGaBeMgXQEBt2CzrRg",
    });

    // When a message is sent, scrolls into view smoothly on bottom
    chatRef.current.scrollIntoView({
      behavior: "smooth",
    });

    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message ${channelName}`}
        />
        {/* Gives functionality of submitting when pressing enter without seeing the button */}
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
