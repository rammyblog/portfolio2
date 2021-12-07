import NavbarStyle from './Navbar.style';

const Navbar = () => {
  return (
    <>
      <NavbarStyle>
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Work</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </NavbarStyle>
    </>
  );
};

export default Navbar;
