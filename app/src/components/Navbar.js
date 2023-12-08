import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONTS, SPACING } from '../utils/StyleConstants';

const Nav = styled.nav`
  background-color: ${COLORS.primary};
  padding: ${SPACING.small};
`;

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const Li = styled.li`
  margin-right: ${SPACING.medium};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-family: ${FONTS.body};

  &:hover {
    color: ${COLORS.accent};
  }
`;

const Navbar = () => (
  <Nav>
    <Ul>
      <Li><StyledLink to="/">Home</StyledLink></Li>
    </Ul>
  </Nav>
);

export default Navbar;