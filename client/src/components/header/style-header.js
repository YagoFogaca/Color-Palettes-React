import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  background-color: #303841;
  align-items: center;
  justify-content: space-between;
  padding: 10px;

  img {
    width: 100px;
  }

  #navbar {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }

  li {
    list-style: none;
  }

  li a {
    padding: 1rem;
    font-size: 2.2rem;
    text-decoration: none;
    color: #fff;
    transition: all 0.1s;
    &:hover {
      border: 1px solid #d72323;
    }
  }

  button {
    width: 100%;
    max-width: 100px;
    min-width: 50px;
    padding: 0.9rem;
    background-color: transparent;
    border: 2px solid #d72323;
    border-radius: 5px;
    font-size: 2.2rem;
    color: #eeeeee;
    cursor: pointer;
    transition: all 0.1s linear;
    &:hover {
      box-shadow: 0px 0px 5px 2px #d72323;
    }
  }
`;
