import React from "react";
import * as SC from "./Projects.style";

const Projects = ({ projectData }) => {
  if (!projectData) return <h1>Loading...</h1>;
  const projectRecord = projectData.records;
  return (
    <>
      <h2 id="Projects">Projects</h2>
      <SC.FlexedProjects>
        {projectRecord.map(record => (
          <SC.ProjectsContainer key={record.fields.project_id}>
            <a
              href={record.fields.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={record.fields.image}
                alt={record.fields.title}
                title={record.fields.title}
              />
            </a>
            <a
              href={record.fields.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{record.fields.title}</h2>
            </a>
            <p>{record.fields.caption}</p>
            <a
              href={record.fields.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Visit the Website</p>
            </a>
            <a
              href={record.fields.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>See the code</p>
            </a>
          </SC.ProjectsContainer>
        ))}
      </SC.FlexedProjects>
    </>
  );
};

export default Projects;
