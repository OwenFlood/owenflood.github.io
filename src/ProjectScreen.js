import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import './ProjectScreen.css'
import projects from './project-data.js'
import stuff from './projects/aeroponic.md'

export default function ProjectScreen() {
  const { projectId } = useParams();
  const project = projects.find(({ id }) => id === Number(projectId));

  const [projectContent, setProjectContent] = useState('')

  useEffect(() => {
    fetch(stuff)
      .then(res => res.text())
      .then(setProjectContent);
  }, []);

  return (
    <div className="markdown-wrapper">
      <ReactMarkdown
        children={projectContent}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                // style={dark}
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
