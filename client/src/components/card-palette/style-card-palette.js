import styled from 'styled-components';

export const SectionStyled = styled.section`
  width: 100%;
  max-width: 260px;
  min-width: 150px;
  height: fit-content;
  .card-colors {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.7rem;
  }

  div {
    width: 100%;
    height: 100px;
  }

  .card-info {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .card-info p {
    font-size: 1.4rem;
  }

  .btn-like {
    width: 40%;
    padding: 0.3rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: transparent;
    border: 1px solid #c5c4c4;
    border-radius: 5px;
    cursor: pointer;
  }

  .card-info span {
    font-size: 1.6rem;
  }
`;
