import styled from 'styled-components';

export const SectionStyledPalette = styled.section`
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  .card-palette {
    width: 80%;
    height: 89%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-infos {
    width: 50%;
    min-width: 250px;
    max-width: 450px;
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

  .card-edit {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }

  @media (max-width: 765px) {
    .card-palette {
      width: 100%;
    }

    .modal-edit {
      justify-content: center;
    }
  }
`;
