import { motion } from 'framer-motion'

import "./Projects.css";
import projects from './project-data'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, mediaPath, setHoverId, blur, id }) => {
  const variants = {
    blurred: { filter: "blur(3px)", backdropFilter: "blur(5px)" },
  };

  return (
    <motion.div
      style={{ backgroundImage: `url(${mediaPath}/thumb.jpg)` }}
      className="project-card"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3 },
      }}
      animate={blur ? "blurred" : ""}
      variants={variants}
      onMouseEnter={() => setHoverId(id)}
      onMouseLeave={() => setHoverId(0)}
    >
      <Link to={`/projects/${id}`}>
        <h1>{title}</h1>
      </Link>
    </motion.div>
  );
};

export default function Projects() {
  const [hoverId, setHoverId] = useState(0);

  return (
    <div className="projects-container">
      {projects.map(({ id, ...props }) => (
        <ProjectCard
          {...props}
          id={id}
          key={id}
          setHoverId={setHoverId}
          blur={hoverId && hoverId !== id}
        />
      ))}
    </div>
  );
}
