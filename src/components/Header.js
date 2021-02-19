import React from "react";
import "./Header.css";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
        //  Add onClick
        />
      </HeaderLeft>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;
