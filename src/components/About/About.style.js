import styled from "styled-components";

const About = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  main {
    text-align: justify;
    padding: 5%;
  }
  p {
    padding: 0.5rem;
    line-height: 1.5rem;
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

const Bold = styled.span`
  font-weight: 600;
`;

export { About, Bold };
