import { AnimateSharedLayout, motion } from 'framer-motion'

import "./Projects.css";
import projects from './project-data'
import { useState } from 'react';

const ProjectCard = ({ title, mediaPath, setHoverId, blur, index }) => {
  const variants = {
    blurred: { filter: "blur(3px)", backdropFilter: "blur(5px)" },
    // : { opacity: 0, x: "-100%" },
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
      onMouseEnter={() => setHoverId(index)}
      onMouseLeave={() => setHoverId(null)}
    >
      <h1>{title}</h1>
    </motion.div>
  );
};

export default function Projects() {
  const [hoverId, setHoverId] = useState(null);

  return (
    <div className="projects-container">
      <AnimateSharedLayout>
        {projects.map((props, id) => (
          <ProjectCard
            {...props}
            index={id}
            key={id}
            setHoverId={setHoverId}
            blur={hoverId !== null && hoverId !== id}
          />
        ))}
      </AnimateSharedLayout>
    </div>
  );
}
