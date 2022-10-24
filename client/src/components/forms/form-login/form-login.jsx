import { FormStyled } from '../style-form';
import { Input } from '../../input/input';
import { BtnSubmit } from '../../btn/btn-submit/btn-submit';
import { api } from '../../../utils/api/api';
import { useNavigate } from 'react-router-dom';

export function FormLogin({ formModify }) {
  let navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    try {
      const userLogin = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      const user = await api.login(userLogin);
      localStorage.setItem('token', user.data.token);
      localStorage.setItem('userId', user.data.user.id);
      localStorage.setItem('likesUser', user.data.user.likes);
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <FormStyled className="form-login" onSubmit={login}>
        <label htmlFor="email">Email:</label>
        <Input id="email" name="email" type="email" placeholder="Email..." />
        <label htmlFor="password">Senha:</label>
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

// {
//   "email": "admin@gmail.com",
//   "password": "admin123"
// }
