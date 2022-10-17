import { useParams } from 'react-router-dom';
import { CardPalette } from '../../components/card-palette/card-palette';
import { palettes } from '../../mocks/palettes';

export function Palette() {
  const { id } = useParams();

  let paletteId;

  palettes.find((palette) => {
    if (palette.id === id) {
      paletteId = palette;
    }
  });

  return (
    <section>
      <CardPalette
        colors={paletteId.colors}
        creationdate={paletteId.creationdate}
        likes={paletteId.likes}
        widthMax={'260px'}
      />
    </section>
  );
}
