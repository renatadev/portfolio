import styled from "styled-components";

const StackContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
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
  }
`;

const FlexedStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Margin = styled.div`
  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin: 0 2rem 0 2rem;
    img {
      width: 40px;
    }
  }
  margin: 0 6rem 0 6rem;
`;

export { StackContainer, FlexedStack, Margin };
