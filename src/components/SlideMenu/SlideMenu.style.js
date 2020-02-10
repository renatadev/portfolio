const Navbar = styled.nav`
  padding-left: 1%;
  display: flex;
  align-items: center;
  height: 100%;
  div a {
    text-decoration: none;
    color: black;
    padding: 0 0.5rem;
    &:hover {
      color: blue;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 1.2rem;
  }
  span {
    flex: 1;
  }
`;
