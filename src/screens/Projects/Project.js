import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import './Project.css'
import projects from 'projects/project-data'
import markdownFiles from 'projects/index.js'

export default function ProjectScreen() {
  const [projectContent, setProjectContent] = useState('')

  const { projectId } = useParams();
  const project = projects.find(({ id }) => id === Number(projectId)); // Will use this in the future for changing page title and favicon possibly
  const projectMarkdown = markdownFiles[projectId]

  useEffect(() => {
    fetch(projectMarkdown)
      .then((res) => res.text())
      .then(setProjectContent);
  }, [projectMarkdown]);

  return (
    <div className="markdown-wrapper">
      <ReactMarkdown
        children={projectContent}
        remarkPlugins={[remarkGfm, remarkGemoji]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
}
