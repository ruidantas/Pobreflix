import * as Style from "./style";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Path } from "../../types/routes";
import { Api } from "../../data/api/api";
import { Loading } from "../utils/loading/loading";

export function Login() {
  const navigate = useNavigate();
  const [buttonpassword, setButtonPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [erro, setErro] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const LoginPayload = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    const response = await Api.login(LoginPayload);
    setLoading(false);
    if (!response) {
      setErro(true);
      return;
    }
    navigate(Path.HOME);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Style.Body>
          <div className="pobreflix">
            <img
              src="https://uploaddeimagens.com.br/images/004/358/382/full/imagen-pobreflix-filmes-e-series-0ori.png?1676731508"
              alt="pobreflix  "
            />
          </div>
          <Style.Login>
            <Style.Form onSubmit={handleSubmit} error={erro}>
              <Style.loginName>Entrar</Style.loginName>
              <input placeholder="email" type="email" name="email" />
              <br />
              <input placeholder="password" type="password" name="password" />
              <br />
              <br />
              <Style.ButtonLogin>Login</Style.ButtonLogin>
              <Style.Register>
                <Style.ButtonRegister
                  onClick={() => {
                    navigate(Path.REGISTRATION);
                  }}
                >Fazer Cadastro</Style.ButtonRegister>
              </Style.Register>
            </Style.Form>
          </Style.Login>
        </Style.Body>
      )}
    </>
  );
}
