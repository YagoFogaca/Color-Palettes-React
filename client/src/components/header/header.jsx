import { Link } from 'react-router-dom';
import { HeaderStyled } from './style-header';

export function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <figure>
          <img src="./img/logo-remove.png" alt="Logo" />
        </figure>
      </Link>

      <nav id="navbar">
        <Link className="navbar-link" to="*">
          Criar
        </Link>
        <Link className="navbar-link" to="*">
          Curtidas
        </Link>
        <Link className="navbar-link" to="*">
          Coleção
        </Link>
        <Link className="navbar-link navbar-link-login" to="/login">
          Login
        </Link>
      </nav>
    </HeaderStyled>
  );
}
