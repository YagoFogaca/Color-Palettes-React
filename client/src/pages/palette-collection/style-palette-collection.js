import styled from 'styled-components';

export const SectionCollectionStyled = styled.section`
  margin: 2px;
  padding: 3rem 10rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  @media (max-width: 600px) {
    & {
      justify-content: center;
    }
  }

  h2 {
    font-size: 6rem;
    color: #d72323;'
    border-bottom: 10px solid;
  }
`;
