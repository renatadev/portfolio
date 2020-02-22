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
  img {
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover {
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3);
      -ms-transform: scale(1.3);
      -o-transform: scale(1.3);
      transform: scale(1.3);
    }
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
