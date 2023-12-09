import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, SPACING } from "../utils/StyleConstants";
import { getPostBySlug } from "../utils/markdownParser";
import ReactMarkdown from "react-markdown";

const Container = styled.div`
  margin: ${SPACING.medium};
`;

const Heading = styled.h2`
  color: ${COLORS.text};
  font-family: ${FONTS.heading};
`;

const Paragraph = styled.p`
  color: ${COLORS.secondary};
  font-family: ${FONTS.body};
`;

const BlogPost = () => {
  const { postId } = useParams();
  const post = getPostBySlug(postId);

  return (
    <Container>
      <Heading>{post.title}</Heading>
      <Paragraph>{post.date}</Paragraph>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Container>
  );
};

export default BlogPost;
