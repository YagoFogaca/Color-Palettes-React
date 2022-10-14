import { HeaderStyled } from './style-header';

export function Header() {
  return (
    <HeaderStyled>
      <figure>
        <img src="./img/logo-remove.png" alt="Logo" />
      </figure>
      <nav id="navbar">
        <ul>
          <li>
            <a href="">Criar</a>
          </li>
          <li>
            <a href="">Curtidas</a>
          </li>
        </ul>
        <button>Login</button>
      </nav>
    </HeaderStyled>
  );
}
