import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  height: auto;
  justify-content: center;
  height: 87%;
  align-items: center;

  #section-form {
    width: 30%;
    height: 300px;
    background-color: #303841;
    display: flex;
    justify-content: center;
    color: #fff;
    border-radius: 10px;
  }

  .form-login {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  .form-login input {
    font-size: 1.6rem;
    padding: 0.8rem 1.2rem;
    box-shadow: inset 0 1px 2px rgb(203 203 210 / 40%),
      inset 0 0 10px 1000px #fffedb;
    border: 1px solid #d72323;
    border-radius: 4px;
  }
  .form-login label {
    font-size: 1.7rem;
  }

  .card-btn {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;
