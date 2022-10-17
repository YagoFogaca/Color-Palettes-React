import { useState } from 'react';
import { SectionStyled } from './style-card-palette';
import copy from 'copy-to-clipboard';

export function CardPalette({ colors, creationdate, likes }) {
  const [like, setLike] = useState('#9a9898');
  const [numLike, setNumLike] = useState(+likes);
  const [textCopy, setTextCopy] = useState(false);

  function copyToClipboard(color) {
    setTextCopy(true);
    copy(color);
    setTimeout(() => {
      setTextCopy(false);
    }, 1000);
  }

  function controlLike() {
    if (like === '#ff0000') {
      setNumLike(numLike - 1);
      setLike('#9a9898');
    } else {
      setNumLike(numLike + 1);
      setLike('#ff0000');
    }
  }

  return (
    <SectionStyled>
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
        <button
          className="btn-like"
          type="submit"
          onClick={() => {
            controlLike();
          }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z"
              fill={like}
            />
          </svg>
          <span>{numLike}</span>
        </button>
      </aside>
    </SectionStyled>
  );
}
