import styled from 'styled-components';

export const SectionCreatePalette = styled.section`
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .section-form {
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: 3rem;
    font-weight: 100;
  }

  .form-palette {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 2.5rem;
    font-weight: 100;
    cursor: pointer;
  }

  .form-palette input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 100px;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }

  .form-palette input::-webkit-color-swatch {
    border-radius: 10px;
    border: none;
  }

  .aside-btns {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;
