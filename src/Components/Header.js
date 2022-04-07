import styles from './Header.module.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <p className={styles.title}>Lista de Clientes</p>
        </div>
      </nav>
    </header>
  );
};

export default Header;
