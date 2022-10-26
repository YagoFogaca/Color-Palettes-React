import styled from 'styled-components';

export const AsideStyled = styled.aside`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .card-colors-infos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .color {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 1px solid;
  }

  .text-color {
    font-size: 1.9rem;
  }
`;
