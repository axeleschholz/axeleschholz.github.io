import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBriefcase,
  faGraduationCap,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";

const PageContainer = styled.div`
  font-family: ${FONTS.body};
  color: ${COLORS.dark};
  padding: ${SPACING.large};
  background-color: ${COLORS.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 800px;
  margin: auto;
`;

const HeaderBar = styled.div`
  width: 100%;
  height: 100px; // adjust this to change the thickness of the header bar
  background-image: url("../../images/background_birds_jpg.jpg");
  background-size: cover;
  background-position: top;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: ${COLORS.primary};
`;

const Subtitle = styled.h2`
  font-size: 2em;
  color: ${COLORS.secondary};
`;

const Headshot = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
`;

const ResumePage = () => {
  return (
    <React.Fragment>
      <HeaderBar />
      <PageContainer>
        <Headshot src="../../images/headshot4.jpg" alt="Axel Eschholz" />
        <Title>Axel Eschholz</Title>
        <Text>
          Hey there! I'm Axel Eschholz, computer scientist, part-time musician,
          occasional travel blogger, and full-time coffee fanatic. I'm
          passionate about applying technology to alleviate inequality and
          foster a more globalized, peaceful world.
        </Text>
        <Subtitle>So, What Have I Been Up To?</Subtitle>
        <Text>
          General All-Around Guy at Stealth Startup (Spring 2023-Present): Here,
          I've been piecing together a digital ecosystem with multiple APIs and
          crafting a mobile app with React Native. I've also been marketing,
          pitching, designing, planning, you name it. It's been a journey of
          scrappy innovation and problem-solving, and I'm learning a ton!
        </Text>
        <Text>
          Intern Extraordinaire at Savant Systems (Summer 2022):I dived deep
          into React.js, creating redux middleware and troubleshooting to
          enhance security and functionality.
        </Text>
        <Text>
          Front-End Developer at Racepoint Energy LLC (Spring 2021): I spent my
          days beautifying web applications with React.js, adding features that
          make users' lives a bit easier.
        </Text>
        <Text>
          Editor-in-Chief at The Athenaeum (2021/2022 Academic Year): Leading
          the editorial team, I set and achieved ambitious goals, driving
          projects to success with a mix of creativity and strategic planning.
        </Text>
        <Subtitle>Skills and Party Tricks</Subtitle>
        <Text>
          Fluent in the universal languages of JavaScript, Python, Java, and C.
          Pure React.js is my comfort zone, but I can also Next.js and React
          Native with the best of them.
        </Text>
        <Text>Data</Text>
        <Text>Algorithms</Text>
        <Text>Cloud Architecture</Text>
        <Subtitle>Education</Subtitle>
        <Text>
          <strong>Acadia University</strong> - Bachelor of Computer science
          <br />I just snagged a CS degree from Acadia University. Somehow, I've
          managed to walk away with a GPA of 4.22 - I guess coffee and
          late-night coding sessions paid off!
        </Text>
      </PageContainer>
    </React.Fragment>
  );
};

export default ResumePage;
