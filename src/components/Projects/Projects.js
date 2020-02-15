import React from "react";
import { ProjectsContainer } from "./Projects.style";

const Projects = ({ projectData }) => {
  if (!projectData) return <h1>Loading...</h1>;
  const projectRecord = projectData.records;
  return (
    <>
      {projectRecord.map(record => (
        <ProjectsContainer key={record.fields.project_id}>
          <a href={record.fields.website}>
            <img
              src={record.fields.image}
              alt={record.fields.title}
              title={record.fields.title}
            />
          </a>
          <a href={record.fields.website}>
            <h2>{record.fields.title}</h2>
          </a>
          <p>{record.fields.description}</p>
          <a href={record.fields.website}>
            <p>Visit the Website</p>
          </a>
          <a href={record.fields.code}>
            <p>See the code</p>
          </a>
        </ProjectsContainer>
      ))}
    </>
  );
};

export default Projects;
