import "./Projects.css";
import projects from './project-data'

const ProjectCard = ({ title, description, id }) => {
  return (
    <div key={id} className="project-card">
      <h1>{title}</h1>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-container">
      {projects.map(({ title }, id) => (
        <ProjectCard title={title} id={id} />
      ))}
    </div>
  );
}
