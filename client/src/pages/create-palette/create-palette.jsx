import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { SectionCreatePalette } from './style-create-palette';
import { api } from '../../utils/api/api';
import { FormPalette } from '../../components/forms/form-palette/form-palette';

export function CreatePalette() {
  const navigate = useNavigate();

  async function createPalette(event) {
    event.preventDefault();

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const palette = {
      id_user: localStorage.getItem('userId'),
      colors: [
        event.target.color_1.value,
        event.target.color_2.value,
        event.target.color_3.value,
        event.target.color_4.value,
      ],
      creationdate: today.toLocaleDateString(),
      likes: '0',
    };
    try {
      const createPalette = await api.createPalette(palette);
      if (createPalette !== undefined) {
        swal({
          title: 'Paleta criada com sucesso!',
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
    } catch (error) {
      swal({
        title: 'Você não fez login!',
        text: 'Você será direcionado para a página de Login',
        icon: 'warning',
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
    }
  }

  return (
    <SectionCreatePalette>
      <FormPalette
        msg={'Crie sua paleta de cores:'}
        colors={['#999999', '#aaaaaa', '#bbbbbb', '#cccccc']}
        btns={[
          {
            text: 'Criar',
            backgroundColorP: '#f3f3f3',
            widthP: '25%',
            btnDisabled: true,
          },
        ]}
        functionForm={createPalette}
      />
    </SectionCreatePalette>
  );
}
