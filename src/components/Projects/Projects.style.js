import styled from "styled-components";

const ProjectsContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  img {
    width: 300px;
    height: auto;
    border: 10px solid #9987c5;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5);
    }
  }
  h2 {
    font-size: 2rem;
  }
  p {
    text-align: justify;
    line-height: 1.5;
    margin: 0rem 1rem 1rem 0rem;
  }
  a {
    text-decoration: none;
    color: #2b2b31;
    &:hover {
      text-decoration: underline;
      color: rgba(0, 140, 186, 0.5);
    }
  }
`;

const FlexedProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { ProjectsContainer, FlexedProjects };
