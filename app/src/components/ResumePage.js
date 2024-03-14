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
import SkillTree from "./SkillTree";
import {
  CardContainer,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "./card";

const SkillBadge = styled.span`
  display: inline-block;
  background-color: ${COLORS.primary};
  color: ${COLORS.background};
  padding: ${SPACING.xsmall} ${SPACING.small};
  border-radius: 15px;
  margin: ${SPACING.xsmall};
  font-size: 0.8rem;
`;

// Reusable Icon component for headings
const Icon = ({ icon }) => <FontAwesomeIcon icon={icon} size="lg" />;
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
    <CardContainer>
      <Card>
        <CardHeader>
          <Icon icon={faClipboard} />
          <CardTitle>Axel Eschholz</CardTitle>
        </CardHeader>
        <CardContent>
          A curious explorer at the intersection of technology and society, with
          a passion for bridging the gap between technical innovation and global
          communication.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Icon icon={faCode} />
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <SkillTree skills={skillsData} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Icon icon={faBriefcase} />
          <CardTitle>Experience</CardTitle>
        </CardHeader>
        <CardContent>
          Currently enriching my skills in real-world applications; stay tuned
          for updates.
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <Icon icon={faGraduationCap} />
          <CardTitle>Education</CardTitle>
        </CardHeader>
        <CardContent>
          <strong>Acadia University</strong> - Bachelor of Computer Science
          (GPA: 4.22)
        </CardContent>
      </Card>
    </CardContainer>
  );
};

export default ResumePage;
