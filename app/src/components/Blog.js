import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";
import {
  CardContainer,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card";
import ReactMarkdown from "react-markdown";

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

const WrapperLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.text};
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

const Blog = ({ posts }) => {
  return (
    <PostsContainer>
      <CardContainer>
        {posts.map((post) => {
          return (
            <WrapperLink to={`/post/${post.slug}`} key={post.slug}>
              <Card key={post.slug}>
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                </CardContent>
              </Card>
            </WrapperLink>
          );
        })}
      </CardContainer>
    </PostsContainer>
  );
};

export default Blog;
