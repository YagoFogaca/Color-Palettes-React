import { AsideCardEdit } from './style-card-edit';
import { BtnSubmit } from '../btn/btn-submit/btn-submit';

export function CardEdit({ openModal, deletePalette, id }) {
  return (
    <AsideCardEdit>
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
          deletePalette(id);
        }}
      />
    </AsideCardEdit>
  );
}
