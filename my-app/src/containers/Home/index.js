import React from "react";
import styled, { useTheme, css } from "styled-components";
import book_backdrop from "../../images/book_backdrop.jpg";

const OldWrapper = styled.div`
  background-image: url(${book_backdrop});
  background-attachment: fixed;
  background-size: contain;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  width: 100%;
  min-height: 100vh;
`;

const ContentCard = styled.div`
  width: 40vw;
  ${(props) => props.theme.small(["width: 70vw;"])};
  margin: auto;
  padding: 2em;
  max-height: 30vh;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1em;
  border: 0.01em solid ${(props) => props.theme.colors.black};
`;
// Remember to implement the theme provider in the state system
const Content = styled.div`
  margin-top: 2em;
`;

//overflow rules will have to change depending on if this is a clickable post

function Home() {
  return (
    <Wrapper>
      <Content>
        <ContentCard>
          Welcome to my Website! The rest of this app is currently under
          construction to become a *cough* pretty fancy blog. But feel free to
          have a poke around!
        </ContentCard>
      </Content>
    </Wrapper>
  );
}

export default Home;
