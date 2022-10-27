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

  @media (max-width: 768px) {
    #navbar-mobile,
    #btn-navbar-mobile {
      display: flex;
    }
  }
`;
