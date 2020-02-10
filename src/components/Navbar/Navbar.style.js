import styled from "styled-components";
import { ReactComponent as Menu } from "../../assets/menu.svg";

const Navbar = styled.nav`
  position: fixed;
  font-size: 2rem;
  widht: 100wh;
  top: 0;
  left: 0;
  padding-left: 1%;
`;

const Nav = styled(Menu)`
  right: 0;
`;

export { Navbar, Nav };
