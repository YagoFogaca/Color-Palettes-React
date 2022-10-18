import { InputStyled } from './style-input';

export function Input({ placeholder, id, name, type }) {
  return (
    <InputStyled type={type} placeholder={placeholder} id={id} name={name} />
  );
}
