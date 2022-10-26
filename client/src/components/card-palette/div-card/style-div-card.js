import styled from 'styled-components';

export const DivStyled = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-end;
  padding: 1rem 1rem 0 0;
  cursor: pointer;

  .copy-color {
    display: none;
    background-color: rgb(0 0 0 / 44%);
    padding: 0.9rem;
    border-radius: 5px;
    font-size: 1.6rem;
    color: #fff;
    cursor: copy;
  }

  &:hover .copy-color {
    display: flex;
  }
`;
