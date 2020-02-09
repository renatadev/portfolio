import styled from "styled-components";
import { ReactComponent as MainSvg } from "../../assets/landing-page.svg";

const HeaderContainer = styled.header`
  width: 90vw;
  height: 90vh;
  display: flex;
  h1 {
    font-size: 2.5rem;
  }
  h1,
  p {
    margin-top: 40vh;
  }
`;

const Svg = styled(MainSvg)`
  @media screen and (min-width: 320px) and (max-width: 640px) {
    width: 50vw;
  }
`;

export { HeaderContainer, Svg };
