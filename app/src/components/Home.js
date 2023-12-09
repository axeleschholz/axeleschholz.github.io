import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";

const PostsContainer = styled.div`
  padding: ${SPACING.medium};
`;

const Ul = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const Li = styled.li`
  margin-bottom: ${SPACING.small};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.text};
  font-weight: bold;
  font-family: ${FONTS.body};

  &:hover {
    color: ${COLORS.accent};
  }
`;

const Home = ({ posts }) => {
  return (
    <PostsContainer>
      <h2>About This Project</h2>
      <p>
        This is the inital bare bones of a personal portfolio website. It runs
        on React and does some cool stuff with loading post data through static
        markdown files instead of dealing with a database.
      </p>
      <p>
        Fun Fact: A lot of this was generated in collaboration with GPT 3.5. It
        was my first experiment using ChatGPT to code and I was pleasently
        surprised with the results.
      </p>
      <h2>Computers & Society Journals</h2>
      <Ul>
        {posts.map((post) => (
          <Li key={post.slug}>
            <StyledLink to={`/blog/${post.slug}`}>{post.title}</StyledLink>
          </Li>
        ))}
      </Ul>
    </PostsContainer>
  );
};

export default Home;
