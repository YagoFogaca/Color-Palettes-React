import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .navbar-mobile {
    width: 100%;
    height: 100%;
    background-color: #303841;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 5rem;
  }

  #btn-close-menu {
    position: absolute;
    top: 0;
    right: 0;
    margin: 2.5rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  svg {
    font-size: 4.5rem;
    color: #d72323;
  }
`;
