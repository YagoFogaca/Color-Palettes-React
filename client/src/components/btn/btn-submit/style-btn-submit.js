import styled from 'styled-components';

export const BtnStyled = styled.button`
  border: 1px solid #000;
  border-radius: 5px;
  box-sizing: initial;
  cursor: pointer;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.8rem 3.2rem;
  transition: all 0.5s;
  &:hover {
    box-shadow: 0 0 8px 0 #000;
  }

  @media (max-width: 768px) {
    &: {
      padding: 0.8rem 1.2rem;
    }
  }
`;
