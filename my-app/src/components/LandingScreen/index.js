import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import backgroundImage from "../../images/placeholder.jpg";

/*linear-gradient(
    120deg,
    rgb(91, 35, 204),
    rgb(35, 35, 140),
    rgb(63, 63, 69),
    rgb(0, 0, 0) 40%
  );*/
const Background = styled.div`
  background-image: url("https://i.imgur.com/ldGA2R1.jpg");
  background-position: center 20%;
  background-size: 300%;
  width: 100%;
  height: 100vh;
`;
function LandingScreen() {
  return <Background>Somethin</Background>;
}

export default LandingScreen;
