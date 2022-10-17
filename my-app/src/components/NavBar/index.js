import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #222;
`;

const Option = styled.li`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 1em 1.3em;
  text-decoration: none;
  &:hover {
    background-color: #555;
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

function NavBar() {
  return (
    <Wrapper>
      <Option>
        <NavbarLink to={`/blog`}>Home</NavbarLink>
      </Option>
      <Option>
        <NavbarLink to={`/about`}>About</NavbarLink>
      </Option>
    </Wrapper>
  );
}

export default NavBar;
