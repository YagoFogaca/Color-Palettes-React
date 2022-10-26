import { useParams } from 'react-router-dom';
import { api } from '../../utils/api/api';
import { CardPalette } from '../../components/card-palette/card-palette';
import { SectionStyledPalette } from './style-palette';
import { useEffect, useState } from 'react';
import { AsideColors } from '../../components/card-colors-info/card-colors-info';
import { BtnSubmit } from '../../components/btn/btn-submit/btn-submit';

export function Palette() {
  const { id } = useParams();
  const [palette, setPalette] = useState([]);
  const id_user = localStorage.getItem('userId');
  console.log(id_user);

  async function getById(id) {
    const getPalette = await api.getById(id);
    setPalette([getPalette]);
  }

  useEffect(() => {
    getById(id);
  }, []);
  // colors: (4)[('#2192FF', '#38E54D', '#9CFF2E', '#FDFF00')];
  // creationdate: '20/10/22';
  // id: 'VWQTVQSH2';
  // id_user: '20NVELIPZ';
  // likes: '15';
  // __v: 0;
  // _id: '6352d4ef07038b7555946726';
  return (
    <SectionStyledPalette>
      {palette.map((item, index) => {
        return (
          <section className="card-palette" key={index}>
            <section className="card-infos">
              <div>
                <p className="creationdate">Criada em : {item.creationdate}</p>
              </div>
              <CardPalette
                id={item.id}
                colors={item.colors}
                likes={item.likes}
                widthMax={'400px'}
                text={'Ver mais'}
                backgroundColorP={'#f3f3f3'}
                widthP={'auto'}
                btnDisabled={false}
              />
              <AsideColors colors={item.colors} />

              {id_user === item.id_user ? (
                <aside className="card-edition">
                  <BtnSubmit
                    backgroundColorP={'#00ff00'}
                    text={'Editar'}
                    widthP={'auto'}
                    typeP={'button'}
                  />
                  <BtnSubmit
                    backgroundColorP={'#ff0000'}
                    text={'Deletar'}
                    widthP={'auto'}
                    typeP={'button'}
                  />
                </aside>
              ) : (
                <></>
              )}
            </section>
          </section>
        );
      })}
    </SectionStyledPalette>
  );
}
