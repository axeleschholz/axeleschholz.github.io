import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faBriefcase,
  faGraduationCap,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";
import SkillTree from "./SkillTree";

const ResumeContainer = styled.div`
  background-color: ${COLORS.background};
  color: ${COLORS.text};
  font-family: ${FONTS.body};
  padding: ${SPACING.large};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: ${SPACING.medium};
`;

const Heading = styled.h1`
  font-family: ${FONTS.heading};
  color: ${COLORS.primary};
  margin-bottom: ${SPACING.small};
`;

const Subheading = styled.h2`
  font-family: ${FONTS.heading};
  color: ${COLORS.primary};
  margin-bottom: ${SPACING.small};
`;

const Icon = styled.span`
  margin-right: ${SPACING.small};
  color: ${COLORS.accent};
`;

const Paragraph = styled.p`
  margin-bottom: ${SPACING.small};
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SkillItem = styled.li`
  background-color: ${COLORS.accent};
  color: ${COLORS.background};
  padding: ${SPACING.small};
  margin: ${SPACING.small};
  border-radius: 5px;
  display: flex;
  align-items: center;
`;

const SkillIcon = styled(FontAwesomeIcon)`
  margin-right: ${SPACING.small};
`;

const skillsData = [
  {
    name: "Programming Languages",
    subSkills: [
      { name: "JavaScript" },
      { name: "Java" },
      { name: "Python" },
      // Add more languages
    ],
  },
  {
    name: "Web Development",
    subSkills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "HTML" },
      { name: "CSS" },
      // Add more web development technologies
    ],
  },
  // Add more skill categories
];

const ResumePage = () => {
  return (
    <ResumeContainer>
      <Heading>Axel Eschholz</Heading>
      <Section>
        <Subheading>
          <Icon>
            <FontAwesomeIcon icon={faClipboard} />
          </Icon>
          Summary
        </Subheading>
        <Paragraph>
          My passion is the convergence of technology and communication in a
          globalized world. As a computer science student with a focus on
          international politics and journalism, I am keenly interested in the
          way that technology is perceived by general society. This interest
          extends to bridging the gap between the often rigid world of
          technological development and the messy, subjective,
          communication-based world of business and politics.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>
          <Icon>
            <FontAwesomeIcon icon={faCode} />
          </Icon>
          Skills
        </Subheading>
        <SkillTree skills={skillsData} />
      </Section>
      <Section>
        <Subheading>
          <Icon>
            <FontAwesomeIcon icon={faBriefcase} />
          </Icon>
          Experience
        </Subheading>
        Experience under development
      </Section>
      <Section>
        <Subheading>
          <Icon>
            <FontAwesomeIcon icon={faGraduationCap} />
          </Icon>
          Education
        </Subheading>
        <Paragraph>
          <strong>Acadia University</strong> - Bachelor of Computer Science
        </Paragraph>
        <Paragraph>GPA: 4.22</Paragraph>
      </Section>
    </ResumeContainer>
  );
};

export default ResumePage;
