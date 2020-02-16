import React from "react";
import * as SC from "./Projects.style";

const Projects = ({ projectData }) => {
  if (!projectData) return <h1>Loading projects...</h1>;
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
              className="image"
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
            {record.fields.role ? (
              <p className="role">Role: {record.fields.role} & developer</p>
            ) : null}
            <p className="stack">Tech stack: {record.fields.tech_stack} </p>
            <p>{record.fields.caption}</p>
            <a
              href={record.fields.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>&#8594; Visit the Website </p>
            </a>
            <a
              href={record.fields.code}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>&#8594; See the code </p>
            </a>
          </SC.ProjectsContainer>
        ))}
      </SC.FlexedProjects>
    </>
  );
};

export default Projects;
