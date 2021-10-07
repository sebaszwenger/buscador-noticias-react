const Header = ({ titulo }) => {
  return (
    <>
      <nav className="nav-wrapper blue darken-3">
        <a href="#!" className="brand-logo center">
          {titulo}
        </a>
      </nav>
    </>
  );
};

export default Header;
