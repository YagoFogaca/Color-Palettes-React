import { MainStyled } from './style-home';
import { CardPalette } from '../../components/card-palette/card-palette';
import { api } from '../../utils/api/api';
import { useEffect, useState } from 'react';

export function Home() {
  const [palettes, setPalettes] = useState([]);
  async function palettesApi() {
    const getAllPalettes = await api.getAllPalettes();
    setPalettes(getAllPalettes);
  }

  useEffect(() => {
    palettesApi();
  }, []);

  return (
    <MainStyled>
      {palettes.map((palette, index) => {
        return (
          <CardPalette
            key={index}
            id={palette.id}
            colors={palette.colors}
            likes={palette.likes}
            widthMax={'260px'}
            text={'Ver mais'}
            backgroundColorP={'#f3f3f3'}
            widthP={'auto'}
            btnDisabled={true}
          />
        );
      })}
    </MainStyled>
  );
}
