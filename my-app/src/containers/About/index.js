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
  background-color: ${(props) => props.theme.colors.palette3};
  width: 100%;
  min-height: 100vh;
`;
// Remember to implement the theme provider in the state system
const Content = styled.div`
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  row-gap: 2em;
  ${(props) => props.theme.small(["width: 70vw;"])};
  margin: auto;
  padding-top: 2em;
`;

//overflow rules will have to change depending on if this is a clickable post
const ContentCard = styled.div`
  width: 100%;
  margin: auto;
  padding: 2em;
  max-height: 30vh;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.palette4};
  border-radius: 0.1em;
  border: 0.01em solid ${(props) => props.theme.colors.palette1};
`;

//  position: relative;
const InfoArea = styled.div`
  width: 70%;
  flex-wrap: wrap;
  row-gap: 1em;
  ${(props) => props.theme.small(["width: 100%; flex-wrap: nowrap;"])};
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

//$position: absolute
const Headshot = styled.div`
  width: 100%;
  margin: 0px;
  ${(props) => props.theme.small(["width: 40%;"])};
  border-radius: 50%;
  background-image: url(${require("../../images/Axel.JPG")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 30%;
`;
const InfoCard = styled.div`
  display: block;
  width: 100%;
  ${(props) => props.theme.small(["display: block; width: 40%"])};
  padding: 2em;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.palette4};
  border-radius: 0.1em;
`;
const UnderInfoCard = styled.div`
  width: 100%;
  z-index: 1;
  max-height: 50vh;
  ${(props) => props.theme.small(["display: none;"])};
  padding: 2em;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  opacity: 50%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1));
`;

function About() {
  return (
    <Wrapper>
      <Content>
        <InfoArea>
          <Headshot></Headshot>
          <InfoCard>
            Welcome to my About Page! The rest of this app is currently under
            construction to become a *cough* pretty fancy blog. But feel free to
            have a poke around!
          </InfoCard>
        </InfoArea>
        <ContentCard>
          Welcome to my About Page! The rest of this app is currently under
          construction to become a *cough* pretty fancy blog. But feel free to
          have a poke around!
        </ContentCard>
      </Content>
    </Wrapper>
  );
}

export default About;
