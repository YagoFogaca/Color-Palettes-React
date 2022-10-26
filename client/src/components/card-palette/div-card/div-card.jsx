import { useState } from 'react';
import copy from 'copy-to-clipboard';
import { DivStyled } from './style-div-card';

export function DivCard({ color }) {
  const [textCopy, setTextCopy] = useState(false);

  function copyToClipboard(color) {
    setTextCopy(true);
    copy(color);
    setTimeout(() => {
      setTextCopy(false);
    }, 1000);
  }

  return (
    <DivStyled
      className="card-color"
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
    </DivStyled>
  );
}
