import { SectionFormPalette } from './style-form-palette';
import { CardPalette } from '../../card-palette/card-palette';
import { useState } from 'react';
import { BtnSubmit } from '../../btn/btn-submit/btn-submit';

export function FormPalette({ msg, colors, btns, functionForm }) {
  const [color1, setColor1] = useState(colors[0]);
  const [color2, setColor2] = useState(colors[1]);
  const [color3, setColor3] = useState(colors[2]);
  const [color4, setColor4] = useState(colors[3]);

  return (
    <>
      <SectionFormPalette>
        <h2>{msg}</h2>
        <form className="form-palette" onSubmit={functionForm}>
          <label htmlFor="color_1">Cor 1:</label>
          <input
            type="color"
            name="color_1"
            id="color_1"
            value={color1}
            onChange={(event) => {
              setColor1(event.target.value);
            }}
          />
          <label htmlFor="color_2">Cor 2:</label>
          <input
            type="color"
            name="color_2"
            id="color_2"
            value={color2}
            onChange={(event) => {
              setColor2(event.target.value);
            }}
          />
          <label htmlFor="color_3">Cor 3:</label>
          <input
            type="color"
            name="color_3"
            id="color_3"
            value={color3}
            onChange={(event) => {
              setColor3(event.target.value);
            }}
          />
          <label htmlFor="color_4">Cor 4:</label>
          <input
            type="color"
            name="color_4"
            id="color_4"
            value={color4}
            onChange={(event) => {
              setColor4(event.target.value);
            }}
          />
          <aside className="aside-btns">
            {btns.map((btn, index) => {
              return (
                <BtnSubmit
                  key={index}
                  text={btn.text}
                  backgroundColorP={btn.backgroundColorP}
                  widthP={btn.widthP}
                  btnDisabled={btn.btnDisabled}
                />
              );
            })}
          </aside>
        </form>
      </SectionFormPalette>
      <CardPalette
        colors={[color1, color2, color3, color4]}
        creationdate={'xx/xx/xx'}
        widthMax={'360px'}
        btnDisabled={false}
      />
    </>
  );
}
