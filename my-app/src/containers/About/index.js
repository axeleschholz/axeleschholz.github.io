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
  ${(props) => props.theme.medium(["width: 70vw;"])};
  ${(props) => props.theme.xl(["width: 50vw;"])};
  ${(props) =>
    props.theme.xl([
      "width: 50vw; padding: 3em;  border: 0.05em solid black; border-radius: 2em",
    ])};
  margin-left: auto;
  margin-right: auto;
`;

const BigName = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0.5em auto 0.5em auto;
  font-size: 3em;
`;
//  position: relative;
const InfoArea = styled.div`
  width: 100%;
  flex-wrap: wrap;
  row-gap: 1em;
  ${(props) => props.theme.medium(["flex-wrap: nowrap;"])};
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

//$position: absolute
const Headshot = styled.div`
  height: 15em;
  width: 15em;
  margin: auto;

  ${(props) => props.theme.small([])};
  border-radius: 50%;
  background-image: url(${require("../../images/headshot2.jpg")});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
`;
const InfoCard = styled.div`
  display: block;
  width: 100%;
  ${(props) => props.theme.medium(["width: 30%"])};
  ${(props) => props.theme.large(["width: 50%"])};
  ${(props) => props.theme.xl(["width: 45%"])};
  padding: 2em;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.palette5};
  border-radius: 0.1em;
`;

const UniversityLink = styled.a`
  margin: 0px;
  color: black;
  font-size: 1.5em;
  text-decoration: bold;
`;

function About() {
  return (
    <Content>
      <BigName>AXEL ESCHHOLZ</BigName>
      <InfoArea>
        <Headshot></Headshot>
        <InfoCard>
          Hello and welcome! I am a computer science student with a passion for
          the convergence of technology and society. As new technologies are
          developed in an increasingly globalized world, their impact on
          humanity is exponential. You can find my blog here or read my resume
          below. Don't hesitate to reach out to me via email or social media!
        </InfoCard>
      </InfoArea>
      <ContentCard>
        <h2>Education</h2>
        <p>
          <UniversityLink href="www.acadiau.ca">
            Acadia University
          </UniversityLink>
          <p>Bachelor's of Computer Science - Expected 2024 - GPA: 4.23</p>
        </p>
      </ContentCard>
      <ContentCard>
        <h2>Work Experience</h2>
        <p>
          <b>Software Development Intern</b> &ndash; Savant Systems &ndash;
          Summer 2022
          <br />
          &emsp;&bull; Developed redux middleware in React.js to perform complex
          functionality
          <br />
          &emsp;&bull; Responded to critical bugs and patched security
          vulnerabilities in a production web app
          <br />
          <b>Software Development Intern</b> &ndash; Racepoint Energy LLC
          &ndash; Spring 2021
          <br />
          &emsp;&bull; Worked with React.js to implement new front-end features
          in a web application
          <br />
          <b>Computer Science Tutor</b> &ndash; University of Prince Edward
          Island &ndash; 2019/2020 Academic Year
          <br />
          <b>Editor-in-Chief</b> &ndash; The Athenaeum &ndash; 2021/2022
          Academic Year
          <br />
          &emsp;&bull; Set goals and accomplished projects across many teams
          within the organization
          <br />
          <b>Security Operations</b> &ndash; Acadia University Safety and
          Security &ndash; 2021/2022 Academic Year
          <br />
          &emsp;&bull; Regularly managed and resolved crises in a high-stress
          environment <br />
          <b>Sailing Counselor</b> &ndash; Camp Laurel South &ndash; Summer 2021
          <br />
          <b>Managing Editor</b> &ndash; The Athenaeum &ndash; 2020/2021
          Academic Year
          <br />
        </p>
      </ContentCard>
    </Content>
  );
}

export default About;
