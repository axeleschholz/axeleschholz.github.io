// src/utils/markdownParser.js
import allPosts from "../generated/posts.json";
import remark from "remark";
import remarkHTML from "remark-html";

export function getPostBySlug(slug) {
  const post = allPosts.find((p) => p.slug === slug);

  if (!post) {
    throw new Error(`Post not found for slug: ${slug}`);
  }

  //if needed, use the following to render hthml version
  //const htmlContent = remark().use(remarkHTML).processSync(post.content).toString();

  return {
    ...post,
  };
}

export function getAllPosts() {
  const maxLength = 500;
  return allPosts.map(({ content, ...rest }) => ({
    ...rest,
    content:
      content.length > maxLength
        ? content.slice(0, maxLength) + "..."
        : content,
    //content: remark().use(remarkHTML).processSync(content).toString(),
  }));
}
