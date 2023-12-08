// scripts/processMarkdown.mjs
import { promises as fsPromises, readdirSync } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import remarkHTML from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');
const outputPath = path.join(process.cwd(), 'src', 'generated', 'posts.json');

const allPosts = await Promise.all(
  readdirSync(postsDirectory).map(async (filename) => {
    const slug = filename.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = await fsPromises.readFile(fullPath, 'utf-8');
    const { data, content } = matter(fileContents);
    const htmlContent = await remark().use(remarkHTML).process(content);

    return {
      slug,
      ...data,
      content: content,
    };
  })
);

await fsPromises.writeFile(outputPath, JSON.stringify(allPosts));