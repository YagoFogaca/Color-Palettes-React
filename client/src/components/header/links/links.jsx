import { Link } from 'react-router-dom';

export function Links() {
  return (
    <>
      <Link className="navbar-link" to="/create-palette">
        Criar
      </Link>
      <Link className="navbar-link" to="/palette-collection">
        Coleção
      </Link>
      <Link className="navbar-link navbar-link-login" to="/login">
        Login
      </Link>
    </>
  );
}
