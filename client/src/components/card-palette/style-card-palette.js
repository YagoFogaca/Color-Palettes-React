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
  }

  .card-info p {
    font-size: 1.4rem;
  }

  .card-info span {
    font-size: 1.6rem;
  }
`;
