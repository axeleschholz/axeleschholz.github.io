import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";

const Nav = styled.nav`
  background-color: ${COLORS.primary};
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  margin-left: ${SPACING.small};
`;

const Li = styled.li`
  padding: ${SPACING.medium};
  &:hover {
    background-color: ${COLORS.accent};
  }
`;

const StyledLink = styled(Link)`
  padding: ${SPACING.medium};
  text-decoration: none;
  flex: 1;
  color: ${COLORS.background};
  font-weight: bold;
  font-family: ${FONTS.body};
`;

const Navbar = () => (
  <Nav>
    <Ul>
      <Li>
        <StyledLink to="/">Home</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/about">About</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/blog">Blog</StyledLink>
      </Li>
    </Ul>
  </Nav>
);

export default Navbar;
