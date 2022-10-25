import { api } from '../../utils/api/api';
import { CardPalette } from '../../components/card-palette/card-palette';
import { useEffect, useState } from 'react';
import { SectionCollectionStyled } from './style-palette-collection';

export function PaletteCollection() {
  const [paletteUser, setPaletteUser] = useState([]);

  async function getByIdUser() {
    const palette = await api.getByIdUser(localStorage.getItem('userId'));
    setPaletteUser(palette);
  }

  useEffect(() => {
    getByIdUser();
  }, []);

  return (
    <h2>Olá</h2>
    // <SectionCollectionStyled>
    //   {paletteUser.map((palette, index) => {
    //     return (
    //       <CardPalette
    //         key={index}
    //         id={palette.id}
    //         colors={palette.colors}
    //         creationdate={palette.creationdate}
    //         likes={palette.likes}
    //         widthMax={'260px'}
    //         text={'Ver mais'}
    //         backgroundColorP={'#f3f3f3'}
    //         widthP={'auto'}
    //         btnDisabled={true}
    //         // functionOnClick={}
    //       />
    //     );
    //   })}
    // </SectionCollectionStyled>
  );
}
