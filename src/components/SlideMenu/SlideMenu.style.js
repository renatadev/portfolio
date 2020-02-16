import styled from "styled-components";

const SlideNav = styled.ul`
  text-align: center;
  margin: 0;
  li {
    box-sizing: border-box;
    padding: 0.5rem;
    list-style-type: none;
  }
  a {
    text-decoration: none;
    font-family: "Caveat Brush", cursive;
    color: #4484cb;
    &:hover {
      color: #2b2b31;
      background-image: linear-gradient(
        transparent 50%,
        #a5cbef 50%,
        #bdafde 85%,
        transparent 85%,
        transparent 100%
      );
      background-repeat: no-repeat;
      background-size: 0% 100%;
      animation: animatedBackground 0.5s cubic-bezier(0.645, 0.045, 0.355, 1)
        0.2s forwards;
    }
  }

  @keyframes animatedBackground {
    to {
      background-size: 100% 100%;
    }
  }
`;

const HackBox = styled.div`
  z-index: 5;
  overflow: visible;
  height: 0;
  position: sticky;
  top: 8vh;
  margin-left: 90vw;
  margin-right: auto;
  @media screen and (min-width: 320px) and (max-width: 640px) {
    margin-left: 80vw;
  }
`;

export { SlideNav, HackBox };
