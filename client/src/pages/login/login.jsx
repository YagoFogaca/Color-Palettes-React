import { SectionStyled } from './style-login';
import { FormLogin } from '../../components/forms/form-login/form-login';
import { FormRegistration } from '../../components/forms/form-registration/form-registration';
import { useState } from 'react';

export function Login() {
  const [modifyForm, setModifyForm] = useState(false);

  function formModify() {
    setModifyForm(!modifyForm);
  }

  return (
    <SectionStyled>
      <section id="section-form">
        <h2>{}</h2>
        {modifyForm ? (
          <>
            <h2>Cadastro</h2>
            <FormRegistration formModify={formModify} />
          </>
        ) : (
          <>
            <h2>Login</h2>
            <FormLogin formModify={formModify} />
          </>
        )}
      </section>
    </SectionStyled>
  );
}
