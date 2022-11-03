import React from "react";
import styled from "styled-components";
import book_backdrop from "../../images/book_backdrop.jpg";

const Wrapper = styled.div`
  background-image: url(${book_backdrop});
  background-attachment: fixed;
  background-size: contain;
  background-position: center;
  width: 100%;
  min-height: 100vh;
`;
// Remember to implement the theme provider in the state system
const Content = styled.div`
  margin-top: 2em;
`;

const ContentCard = styled.div`
  width: 40vw;
  margin: auto;
  padding: 3em;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 1em;
  border: 0.01em solid ${(props) => props.theme.colors.black};
`;

function Home() {
  return (
    <Wrapper>
      <Content>
        <ContentCard>
          Hello, this app is currently under construction, please come back
          later!
        </ContentCard>
      </Content>
    </Wrapper>
  );
}

export default Home;
