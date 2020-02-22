import styled from "styled-components";

const ProjectsContainer = styled.div`
  max-width: 300px;
  margin-top: 2rem;
  padding: 0 2rem 0 2rem;
  img {
    width: 300px;
    height: auto;
    border: 10px solid #9987c5;
    border-radius: 4px;
    filter: grayscale(20%);
    &:hover {
      box-shadow: 0 0 5px 5px rgba(0, 140, 186, 0.5);
      filter: none;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 640px) {
    img {
      max-width: 300px;
      border: 5px solid #9987c5;
    }
  }

  h2 {
    font-size: 2rem;
    padding: 0.5rem;
  }
  p {
    text-align: justify;
    line-height: 1.5;
    margin: 0rem 1rem 1rem 0rem;
  }
  .role {
    font-weight: 700;
  }
  .stack {
    font-weight: 600;
    font-size: 0.8rem;
  }
  a {
    text-decoration: none;
    color: #2b2b31;
    &:hover {
      text-decoration: underline;
      color: #9987c5;
    }
  }
  .image:hover {
    color: rgba(0, 140, 186, 0.5);
  }
`;

const FlexedProjects = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { ProjectsContainer, FlexedProjects };
