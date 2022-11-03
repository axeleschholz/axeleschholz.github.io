import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";
import NavBar from "../../components/NavBar";
import styled from "styled-components";

//Define a styled grid here
function App() {
  const Divider = styled.div`
    display: grid;
    grid-template-rows: 1fr auto;
  `;
  console.log("app");
  return (
    <React.Fragment>
      <Router>
        <Divider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Divider>
      </Router>
    </React.Fragment>
  );
}

export default App;
