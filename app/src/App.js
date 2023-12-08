import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import { getAllPosts } from './utils/markdownParser';

const App = () => {
  console.log("RENDERING APP");
  const allPosts = getAllPosts();
  return (
    <Router>
      <div>
        <h1>My React Blog</h1>
        
        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Switch>
          <Route path="/" exact>
            <Home posts={allPosts} />
          </Route>
          <Route path="/blog/:postId" component={BlogPost} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;