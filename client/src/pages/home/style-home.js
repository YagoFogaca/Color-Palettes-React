import styled from 'styled-components';

export const MainStyled = styled.main`
  margin: 2px;
  padding: 3rem 10rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`;
