import styled from "styled-components";

const About = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  h2 {
    font-size: 3rem;
  }
  main {
    text-align: center;
    padding: 5%;
  }

  img {
    padding: 5%;
  }

  @media screen and (min-width: 320px) and (max-width: 800px) {
    flex-direction: column-reverse;
    img {
      width: 303px;
      height: auto;
    }
  }
`;

export { About };
