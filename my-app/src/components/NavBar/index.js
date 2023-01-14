import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.palette1};
`;

//eventually, change the default display to none
const Option = styled.li`
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  display: block;
  ${(props) => props.theme.small(["display: block;"])};
`;

const NavbarLink = styled(Link)`
  color: white;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 1em 1.3em;
  text-decoration: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.accent1};
  }
`;

function NavBar() {
  //use a flexbox for this
  return (
    <Wrapper>
      <Option>
        <NavbarLink to={`/home`}>Home</NavbarLink>
      </Option>
      <Option>
        <NavbarLink to={`/about`}>About</NavbarLink>
      </Option>
    </Wrapper>
  );
}

export default NavBar;
