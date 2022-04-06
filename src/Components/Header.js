import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/`} className="navbar-text">Login</Link>
          <Link to={`/clients`} className="navbar-text">Clientes</Link>
          <Link to={`/details/`} className="navbar-text">Detalhes</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
