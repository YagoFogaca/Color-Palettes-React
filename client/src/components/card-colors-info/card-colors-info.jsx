import { AsideStyled } from './style-card-colors-info';

export function AsideColors({ colors }) {
  return (
    <AsideStyled>
      {colors.map((color, index) => {
        return (
          <div className="card-colors-infos" key={index}>
            <div
              className="color"
              style={{
                backgroundColor: color,
              }}
            ></div>
            <p className="text-color">{color}</p>
          </div>
        );
      })}
    </AsideStyled>
  );
}
