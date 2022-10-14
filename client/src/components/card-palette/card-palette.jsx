import { SectionStyled } from './style-card-palette';
export function CardPalette({ colors, creationdate, likes }) {
  return (
    <SectionStyled>
      <aside className="card-colors">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: color,
              }}
            ></div>
          );
        })}
      </aside>
      <aside className="card-info">
        <p>{creationdate}</p>
        <span>{likes}</span>
      </aside>
    </SectionStyled>
  );
}
