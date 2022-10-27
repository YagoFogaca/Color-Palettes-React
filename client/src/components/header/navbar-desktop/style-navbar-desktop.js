import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .navbar-link {
    padding: 1rem;
    font-size: 2rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.1s;
    border-bottom: 2px solid #d72323;
    &:hover {
      box-shadow: 0px 0px 5px 2px #d72323;
    }
  }

  .navbar-link-login {
    width: 100%;
    max-width: 100px;
    min-width: 50px;
    padding: 0.9rem;
    background-color: transparent;
    border: 2px solid #d72323;
    border-radius: 5px;
    font-size: 2rem;
    text-align: center;
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      box-shadow: 0px 0px 5px 2px #d72323;
    }
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
  }
`;
