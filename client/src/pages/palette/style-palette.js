import styled from 'styled-components';

export const SectionStyledPalette = styled.section`
  height: 89vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-palette {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-infos {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: #eee;
    padding: 1rem;
    border-radius: 20px;
    box-shadow: 0px 0px 10px #aaa;
  }

  .creationdate {
    font-size: 2.5rem;
  }

  .card-edition {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
