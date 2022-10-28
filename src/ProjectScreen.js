import { useParams } from "react-router-dom";

import projects from './project-data.js'

export default function ProjectScreen() {
  const { projectId } = useParams();
  const project = projects.find(({ id }) => id === Number(projectId));

  console.log(project);

  return <div></div>;
}
