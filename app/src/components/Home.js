import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, FONTS, SPACING } from '../utils/StyleConstants';

const Ul = styled.ul`
  padding: 0;
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
    <div>
      <h2>Home</h2>
      <Ul>
        {posts.map((post) => (
          <Li key={post.slug}>
            <StyledLink to={`/blog/${post.slug}`}>{post.title}</StyledLink>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

export default Home;