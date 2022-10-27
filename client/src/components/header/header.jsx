import { Link } from 'react-router-dom';
import { HeaderStyled } from './style-header';
import { BiMenu } from 'react-icons/bi';
import { NavbarDesktop } from './navbar-desktop/navbar-desktop';
import { NavbarMobile } from './navbar-mobile/navbar-mobile';
import { useState } from 'react';

export function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  function menuOpen() {
    setMenuMobile(!menuMobile);
  }

  return (
    <HeaderStyled>
      <Link to="/">
        <figure>
          <img src="./img/logo-remove.png" alt="Logo" />
        </figure>
      </Link>

      <NavbarDesktop />

      <button
        id="btn-navbar-mobile"
        onClick={() => {
          menuOpen();
        }}
      >
        <BiMenu id="navbar-mobile" />
        {menuMobile ? <NavbarMobile functionBtn={menuOpen} /> : <></>}
      </button>
    </HeaderStyled>
  );
}
