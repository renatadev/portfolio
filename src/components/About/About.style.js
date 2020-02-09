import styled from "styled-components";

const About = styled.header`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  h2 {
    font-size: 3rem;
  }
  main {
    padding: 5%;
    text-align: center;
  }
  section {
    padding: 5%;
  }
  @media screen and (min-width: 320px) and (max-width: 640px) {
    flex-direction: column;
  }
`;

export { About };
