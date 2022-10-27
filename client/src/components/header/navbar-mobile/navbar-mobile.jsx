import { SectionStyled } from './style-navbar-mobile';
import { Links } from '../links/links';
import { CgClose } from 'react-icons/cg';

export function NavbarMobile({ functionBtn }) {
  return (
    <SectionStyled>
      <nav className="navbar-mobile">
        <button id="btn-close-menu" onClick={functionBtn}>
          <CgClose />
        </button>
        <Links />
      </nav>
    </SectionStyled>
  );
}
