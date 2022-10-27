import { FormPalette } from '../forms/form-palette/form-palette';
import { CgClose } from 'react-icons/cg';

export function ModalEdit({ colors, closeModal, updatePalette }) {
  return (
    <>
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
        colors={colors}
        functionForm={updatePalette}
        btns={[
          {
            text: 'Editar',
            backgroundColorP: '#00ff00',
            widthP: 'auto',
          },
        ]}
      />
    </>
  );
}
