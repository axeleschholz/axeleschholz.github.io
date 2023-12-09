// SkillTree.js
import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, SPACING } from "../utils/StyleConstants";

const SkillTreeContainer = styled.div`
  display: flex;
  flex-direction: row; /* Display children horizontally */
  align-items: center;
`;

const SkillTreeNode = styled.div`
  display: flex;
  align-items: center;
`;

const SkillTreeItem = styled.div`
  position: relative;
  text-align: center;
`;

const SkillTreeConnector = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: ${SPACING.small};
  height: 2px;
  background-color: ${COLORS.primary};
`;

const SkillTreeBox = styled.div`
  border: 2px solid ${COLORS.accent};
  background-color: ${COLORS.accent};
  color: ${COLORS.background};
  border-radius: 5px;
  padding: ${SPACING.small};
  margin: ${SPACING.small};
  display: inline-block;
`;

const SkillTreeText = styled.div`
  cursor: pointer;
`;

const SkillTree = ({ skills }) => {
  const [openNodes, setOpenNodes] = useState([]);

  const toggleNode = (node) => {
    if (openNodes.includes(node)) {
      setOpenNodes(openNodes.filter((openNode) => openNode !== node));
    } else {
      setOpenNodes([...openNodes, node]);
    }
  };

  const renderSkill = (skill) => (
    <SkillTreeItem key={skill.name}>
      {skill.parent && <SkillTreeConnector />}
      <SkillTreeBox>
        <SkillTreeNode>
          <SkillTreeText onClick={() => toggleNode(skill.name)}>
            {skill.subSkills ? (
              <strong>{skill.name}</strong>
            ) : (
              <span>{skill.name}</span>
            )}
          </SkillTreeText>
        </SkillTreeNode>
      </SkillTreeBox>
      {skill.subSkills && openNodes.includes(skill.name) && (
        <SkillTreeContainer>{renderSkills(skill.subSkills)}</SkillTreeContainer>
      )}
    </SkillTreeItem>
  );

  const renderSkills = (skills) => skills.map(renderSkill);

  return <SkillTreeContainer>{renderSkills(skills)}</SkillTreeContainer>;
};

export default SkillTree;
