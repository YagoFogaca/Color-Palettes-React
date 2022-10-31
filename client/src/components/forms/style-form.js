import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  label {
    font-size: 1.7rem;
  }

  span {
    font-size: 1.5rem;
    color: #d72323;
  }

  .card-btn {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    gap: 1rem;
  }
`;
