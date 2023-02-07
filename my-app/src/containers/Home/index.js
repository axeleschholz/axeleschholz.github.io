import React from "react";
import styled from "styled-components";
import ContentCard from "../../components/ContentCard";

// Remember to implement the theme provider in the state system
const Content = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  row-gap: 2em;
  ${(props) => props.theme.small(["width: 70vw;"])};
  ${(props) => props.theme.xl(["width: 50vw; padding: 3em;"])};
  margin-left: auto;
  margin-right: auto;
`;

//overflow rules will have to change depending on if this is a clickable post

function Home() {
  return (
    <Content>
      <ContentCard>
        Welcome to my Website! The rest of this app is currently under
        construction to become a *cough* pretty fancy blog. But feel free to
        have a poke around!
      </ContentCard>
    </Content>
  );
}

export default Home;
