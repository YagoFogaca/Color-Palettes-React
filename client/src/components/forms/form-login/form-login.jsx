import { FormStyled } from '../style-form';
import { Input } from '../../input/input';
import { BtnSubmit } from '../../btn/btn-submit/btn-submit';

export function FormLogin({ formModify }) {
  function login(event) {
    event.preventDefault();
    const userLogin = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
  }
  return (
    <>
      <FormStyled className="form-login" onSubmit={login}>
        <label htmlFor="email">Email:</label>
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
            text={'Login'}
            backgroundColorP={'#d72323'}
            widthP={'auto'}
          />
          <BtnSubmit
            text={'Cadastro'}
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
