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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 10px;
  }

  h2 {
    margin-top: 2rem;
    font-size: 2.6rem;
  }

  .form-login {
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  .form-login label {
    font-size: 1.7rem;
  }

  .card-btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
