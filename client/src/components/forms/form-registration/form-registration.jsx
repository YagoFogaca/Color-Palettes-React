import { FormStyled } from '../style-form';
import { Input } from '../../input/input';
import { BtnSubmit } from '../../btn/btn-submit/btn-submit';

export function FormRegistration() {
  function registration(event) {
    event.preventDefault();
    const userLogin = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
  }
  return (
    <>
      <FormStyled className="form-login" onSubmit={registration}>
        <label htmlFor="name_user">Nome:</label>
        <Input
          id="name_user"
          name="name_user"
          type="text"
          placeholder="Nome..."
        />

        <label htmlFor="password">Email:</label>
        <Input id="email" name="email" type="email" placeholder="Email..." />

        <label htmlFor="password">Password:</label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Senha"
        />

        <div className="card-btn">
          <BtnSubmit
            text={'Cadastro'}
            backgroundColorP={'#d72323'}
            widthP={'auto'}
          />
          <BtnSubmit text={'Login'} backgroundColorP={'#fff'} widthP={'auto'} />
        </div>
      </FormStyled>
    </>
  );
}