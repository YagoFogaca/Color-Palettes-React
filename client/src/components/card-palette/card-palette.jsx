import { SectionStyled } from './style-card-palette';
import { DivCard } from './div-card/div-card';
import { BtnSubmit } from '../btn/btn-submit/btn-submit';

export function CardPalette({
  colors,
  creationdate,
  widthMax,
  text,
  backgroundColorP,
  widthP,
  functionOnClick,
  btnDisabled,
}) {
  return (
    <SectionStyled
      style={{
        maxWidth: widthMax,
      }}
    >
      <aside className="card-colors">
        {colors.map((color, index) => {
          return <DivCard key={index} color={color} />;
        })}
      </aside>
      <aside className="card-info">
        {btnDisabled ? (
          <BtnSubmit
            text={text}
            backgroundColorP={backgroundColorP}
            widthP={widthP}
            // functionOnClick={}
          />
        ) : (
          <></>
        )}
      </aside>
    </SectionStyled>
  );
}
