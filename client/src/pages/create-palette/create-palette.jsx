import { SectionCreatePalette } from './style-create-palette';
import { useState } from 'react';
import { api } from '../../utils/api/api';

import { FormPalette } from '../../components/forms/form-palette/form-palette';

export function CreatePalette() {
  const [msg, setMsg] = useState('Crie sua paleta de cores:');

  async function createPalette(event) {
    setMsg('Criando sua paleta');
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

    await api.createPalette(palette);

    setMsg('Criando sua paleta criada com sucesso...');

    setTimeout(() => {
      setMsg('Crie sua paleta de cores:');
    }, 3000);
  }

  return (
    <SectionCreatePalette>
      <FormPalette
        msg={msg}
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
