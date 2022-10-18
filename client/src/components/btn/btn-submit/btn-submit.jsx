import { BtnStyled } from './style-btn-submit';

export function BtnSubmit({
  text,
  typeP = 'submit',
  backgroundColorP,
  widthP,
  functionOnClick = undefined,
}) {
  return (
    <BtnStyled
      type={typeP}
      style={{
        backgroundColor: backgroundColorP,
        width: widthP,
      }}
      onClick={functionOnClick}
    >
      {text}
    </BtnStyled>
  );
}
