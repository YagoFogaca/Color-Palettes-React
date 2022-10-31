import { InputStyled } from './style-input';

export function Input({ placeholder, id, name, type, onChange = undefined }) {
  return (
    <InputStyled
      required
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={onChange}
    />
  );
}
