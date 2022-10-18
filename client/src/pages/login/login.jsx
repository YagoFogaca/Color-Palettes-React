import { BtnSubmit } from '../../components/btn/btn-submit/btn-submit';
import { SectionStyled } from './style-login';

export function Login() {
  function login(event) {
    event.preventDefault();
    const userLogin = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
  }

  return (
    <SectionStyled>
      <section id="section-form">
        <form className="form-login" onSubmit={login}>
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" placeholder="Email..." />
          <label htmlFor="password">Password:</label>
          <input
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
            />
          </div>
        </form>
      </section>
    </SectionStyled>
  );
}
