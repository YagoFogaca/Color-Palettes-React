import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { api } from '../../utils/api/api';
import { CardPalette } from '../../components/card-palette/card-palette';
import { SectionStyledPalette } from './style-palette';
import { AsideColors } from '../../components/card-colors-info/card-colors-info';
import { BtnSubmit } from '../../components/btn/btn-submit/btn-submit';

export function Palette() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [palette, setPalette] = useState([]);
  const id_user = localStorage.getItem('userId');

  async function getById(id) {
    const getPalette = await api.getById(id);
    setPalette([getPalette]);
  }

  async function deletePalette(id) {
    await api.deletePalette(id);
    swal({
      title: 'Paleta deletada com sucesso!',
      text: 'Você será direcionado para a página Home',
      icon: 'success',
      dangerMode: true,
      buttons: {
        confirm: {
          text: 'Confirmar',
          value: true,
          visible: true,
          closeModal: true,
        },
      },
    }).then(async (res) => {
      if (res) {
        navigate('/');
      }
    });
  }

  useEffect(() => {
    getById(id);
  }, []);

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
                    functionOnClick={() => {
                      deletePalette(item.id);
                    }}
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
