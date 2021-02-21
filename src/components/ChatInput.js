import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function ChatInput({ channelName, channelId }) {
  const sendMessage = (e) => {
    e.preventDefault(); // prevent refresh
  };
  return (
    <ChatInputContainer>
      <form>
        <input placeholder={`Message #ROOM`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND MESSAGE
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div``;
