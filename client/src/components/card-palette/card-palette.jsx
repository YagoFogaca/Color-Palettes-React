import { SectionStyled } from './style-card-palette';
import { DivCard } from './div-card/div-card';
import { BtnSubmit } from '../btn/btn-submit/btn-submit';
import { useNavigate } from 'react-router-dom';

export function CardPalette({
  colors,
  widthMax,
  text,
  backgroundColorP,
  widthP,
  btnDisabled,
  id,
}) {
  const navigate = useNavigate();

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
            functionOnClick={() => {
              navigate(`/palette/${id}`);
            }}
          />
        ) : (
          <></>
        )}
      </aside>
    </SectionStyled>
  );
}
