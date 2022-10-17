import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar";
import { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  background-color: #bbb;
  width: 100%;
  min-height: 100vh;
`;
// Remember to implement the theme provider in the state system
const ContentCard = styled.div`
  width: 25em;
  margin: auto;
  margin-top: 3em;
  padding: 3em;
  background-color: white;
  border-radius: 1em;
  border: 0.01em solid #222;
`;

function Home() {
  return (
    <Wrapper>
      <NavBar />
      <ContentCard>
        Hello, this app is currently under construction, please come back later!
      </ContentCard>
    </Wrapper>
  );
}

export default Home;
