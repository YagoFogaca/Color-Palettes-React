import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { CgClose } from 'react-icons/cg';
import swal from 'sweetalert';
import { api } from '../../utils/api/api';
import { CardPalette } from '../../components/card-palette/card-palette';
import { SectionStyledPalette } from './style-palette';
import { AsideColors } from '../../components/card-colors-info/card-colors-info';
import { BtnSubmit } from '../../components/btn/btn-submit/btn-submit';
import { FormPalette } from '../../components/forms/form-palette/form-palette';

const customStyles = {
  content: {
    width: '70%',
    minWidth: '500px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
};

Modal.setAppElement('#root');

export function Palette() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [palette, setPalette] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const id_user = localStorage.getItem('userId');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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

  async function updatePalette(event) {
    event.preventDefault();
    const palette = {
      id: id,
      colors: [
        event.target.color_1.value,
        event.target.color_2.value,
        event.target.color_3.value,
        event.target.color_4.value,
      ],
    };
    await api.updatePalette(palette);
    swal({
      title: 'Paleta atualizada com sucesso!',
      text: 'Você será direcionado para a página da paleta',
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
    });
    closeModal();
  }

  useEffect(() => {
    getById(id);
  }, []);

  return (
    <SectionStyledPalette>
      {palette.map((item, index) => {
        return (
          <>
            <section className="card-palette" key={index}>
              <section className="card-infos">
                <div>
                  <p className="creationdate">
                    Criada em : {item.creationdate}
                  </p>
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
                      functionOnClick={openModal}
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
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <button
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  margin: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                onClick={closeModal}
              >
                <CgClose
                  style={{
                    color: '#d72323',
                    fontSize: '4.5rem',
                    cursor: 'pointer',
                  }}
                />
              </button>

              <FormPalette
                msg={'Editar sua paleta: '}
                colors={item.colors}
                functionForm={updatePalette}
                btns={[
                  {
                    text: 'Editar',
                    backgroundColorP: '#00ff00',
                    widthP: 'auto',
                  },
                ]}
              />
            </Modal>
          </>
        );
      })}
    </SectionStyledPalette>
  );
}
