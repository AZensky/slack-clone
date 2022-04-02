import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

function ChatInput({ channelName, channelId }) {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form>
        <input placeholder={`Message #ROOM`} />
        {/* Gives functionality of submitting when pressing enter without seeing the button */}
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div``;
