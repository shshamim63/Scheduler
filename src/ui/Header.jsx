import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">Shortcut</Link>
      <p>Hello User</p>
    </header>
  );
};

export default Header;
