import { MainStyled } from './style-home';
import { palettes } from '../../mocks/palettes';
import { CardPalette } from '../../components/card-palette/card-palette';

export function Home() {
  return (
    <MainStyled>
      {palettes.map((palette, index) => {
        return (
          <CardPalette
            key={index}
            colors={palette.colors}
            creationdate={palette.creationdate}
            likes={palette.likes}
            widthMax={'260px'}
          />
        );
      })}
    </MainStyled>
  );
}
