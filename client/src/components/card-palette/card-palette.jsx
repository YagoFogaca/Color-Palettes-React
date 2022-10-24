import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { SectionStyled } from './style-card-palette';

export function CardPalette({ colors, creationdate, likes, widthMax, id }) {
  const [textCopy, setTextCopy] = useState(false);

  function copyToClipboard(color) {
    setTextCopy(true);
    copy(color);
    setTimeout(() => {
      setTextCopy(false);
    }, 1000);
  }

  return (
    <SectionStyled
      style={{
        maxWidth: widthMax,
      }}
    >
      <aside className="card-colors">
        {colors.map((color, index) => {
          return (
            <div
              className="card-color"
              key={index}
              style={{
                backgroundColor: color,
              }}
            >
              <span
                onClick={(color) => {
                  copyToClipboard(color.target.outerText);
                }}
                className="copy-color"
              >
                {textCopy ? 'Copiado' : color}
              </span>
            </div>
          );
        })}
      </aside>
      <aside className="card-info">
        <p>{creationdate}</p>
      </aside>
    </SectionStyled>
  );
}
