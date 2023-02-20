import * as Style from "./style";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Path } from "../../types/routes";
import { User } from "./types/type";
import { Api } from "../../data/api/api";

export function Registration() {
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const user: User = {
      name: e.currentTarget.nameUser.value,
      cpf: e.currentTarget.cpf.value,
      email: e.currentTarget.email.value,
      idade: Number(e.currentTarget.idade.value),
      role: "user",
      password: e.currentTarget.password.value,
      confirmPassword: e.currentTarget.confirmPassword.value,
    };

    const response = await Api.createUser(user);
    if (response) {
      navigate(Path.LOGIN);
    }
  }
  return (
    <Style.registration>
      <Style.registrationLogin>
        <Style.TituloRegister>Cadastro</Style.TituloRegister>
        <Style.registrationform onSubmit={handleSubmit}>
          <input type="text" name="nameUser" placeholder="Nome Completo" />
          <input type="text" name="cpf" placeholder="CPF" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="number" name="idade" placeholder="Idade" />
          <input type="text" name="password" placeholder="Senha" />
          <input
            type="text"
            name="confirmPassword"
            placeholder="Confirmação da senha"
          />
          <Style.registrationDivButton>
            <Style.registrationButton type="submit">
              Enviar
            </Style.registrationButton>
            <Style.registrationButton
              onClick={() => {
                navigate(Path.LOGIN);
              }}
            >
              Voltar
            </Style.registrationButton>
          </Style.registrationDivButton>
        </Style.registrationform>
      </Style.registrationLogin>
    </Style.registration>
  );
}
