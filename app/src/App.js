import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ResumePage from "./components/ResumePage";
import BlogPost from "./components/BlogPost";
import { getAllPosts } from "./utils/markdownParser";
import styled from "styled-components";
import { COLORS } from "./utils/StyleConstants";
import Blog from "./components/Blog";

const Wrapper = styled.div`
  background-color: ${COLORS.background};
  width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
`;
const App = () => {
  console.log("RENDERING APP");
  const allPosts = getAllPosts();
  console.log(allPosts);
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <ResumePage />
          </Route>
          <Route path="/about" exact>
            <ResumePage />
          </Route>
          <Route path="/blog" exact>
            <Blog posts={allPosts} />
          </Route>
          <Route path="/post/:postId" component={BlogPost} />
        </Switch>
      </Wrapper>
    </Router>
  );
};

export default App;
