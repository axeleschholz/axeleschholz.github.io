import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";
import NavBar from "../../components/NavBar";
import styled from "styled-components";

//Define a styled grid here
function App() {
  const Divider = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
  `;

  const Wrapper = styled.div`
    background-color: ${(props) => props.theme.colors.palette4};
    width: 100%;
    min-height: 100vh;
  `;
  const imgs = ["../../images/Axel.jpg", "../../images/placeholder.jpg"];

  return (
    <React.Fragment>
      <Router>
        <Divider>
          <NavBar />
          <Wrapper>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Wrapper>
        </Divider>
      </Router>
    </React.Fragment>
  );
}

export default App;
