import React from "react";
import styled from "styled-components";

const ContentCard = styled.div`
  width: 100%;
  margin: auto;
  padding: 0em 2em 1em 2em;
  overflow-y: auto;
  overflow-x: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  background-color: ${(props) => props.theme.colors.palette5};
  border-radius: 0.1em;
  border: 0.01em solid ${(props) => props.theme.colors.palette1};
`;

export default ContentCard;
