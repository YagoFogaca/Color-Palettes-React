import { BtnSubmit } from '../../components/btn/btn-submit/btn-submit';
import { SectionStyled } from './style-login';
import { Input } from '../../components/input/input';

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
        <h2>Faça login</h2>
        <form className="form-login" onSubmit={login}>
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
            />
          </div>
        </form>
      </section>
    </SectionStyled>
  );
}
