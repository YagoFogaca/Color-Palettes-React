import { FormStyled } from '../style-form';
import { Input } from '../../input/input';
import { BtnSubmit } from '../../btn/btn-submit/btn-submit';
import { useState } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { api } from '../../../utils/api/api';

export function FormRegistration({ formModify, login }) {
  const [verifyName, setVerifyName] = useState(false);
  const [verifyPassword, setVerifyPassword] = useState(false);

  const navigate = useNavigate();

  async function registration(event) {
    event.preventDefault();
    const userCreate = {
      name: event.target.name_user.value,
      email: event.target.email.value,
      password: event.target.password.value,
      likes: [],
    };

    const userCreated = await api.createUser(userCreate);

    if (userCreated !== undefined) {
      swal({
        title: 'Usuario criado com sucesso!',
        text: 'Você será direcionado para de página Login',
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
          login();
        }
      });
    }
  }

  return (
    <>
      <FormStyled className="form-login" onSubmit={registration}>
        {verifyName ? <span>Nome invalido</span> : <></>}
        <label htmlFor="name_user">Nome:</label>
        <Input
          id="name_user"
          name="name_user"
          type="text"
          placeholder="Nome..."
          onChange={(event) => {
            if (event.target.value.length < 2) {
              setVerifyName(true);
            } else if (event.target.value.length >= 2) {
              setVerifyName(false);
            }
          }}
        />

        <label htmlFor="password">Email:</label>
        <Input id="email" name="email" type="email" placeholder="Email..." />

        {verifyPassword ? <span>Senha invalida</span> : <></>}
        <label htmlFor="password">Senha:</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
          onChange={(event) => {
            if (event.target.value.length < 7) {
              setVerifyPassword(true);
            } else if (event.target.value.length >= 7) {
              setVerifyPassword(false);
            }
          }}
        />

        <div className="card-btn">
          <BtnSubmit
            text={'Cadastro'}
            backgroundColorP={'#d72323'}
            widthP={'auto'}
          />
          <BtnSubmit
            text={'Login'}
            backgroundColorP={'#fff'}
            widthP={'auto'}
            typeP={'button'}
            functionOnClick={formModify}
          />
        </div>
      </FormStyled>
    </>
  );
}
