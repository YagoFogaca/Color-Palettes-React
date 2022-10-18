import { BtnStyled } from './style-btn-submit';

export function BtnSubmit({ text, backgroundColorP, widthP }) {
  return (
    <BtnStyled
      type="submit"
      style={{
        backgroundColor: backgroundColorP,
        width: widthP,
      }}
    >
      {text}
    </BtnStyled>
  );
}
