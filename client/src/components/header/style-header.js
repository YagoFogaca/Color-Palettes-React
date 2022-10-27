import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #303841;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  img {
    width: 100px;
  }

  #btn-navbar-mobile {
    display: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #navbar-mobile {
    display: none;
    font-size: 4rem;
    color: #d72323;
  }

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
    #navbar {
      display: none;
    }

    #navbar-mobile,
    #btn-navbar-mobile {
      display: flex;
    }
  }
`;
