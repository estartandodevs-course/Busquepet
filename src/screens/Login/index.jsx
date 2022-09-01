import { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import Icon from "@/assets/images/Check.svg";
import { InputField, Text, Button } from "@/components";
import { login } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const responseLogin = await login(user, password);

    if (responseLogin.success) {
      navigate("/feed");
    } else {
      alert("Erro com email ou senha, tente novamente!");
      console.log(responseLogin.data);
    }
  }
  const navigate = useNavigate();
  function redirect() {
    navigate("/cadastro-tipo-de-pessoa");
  }

  return (
    <>
      <section className="container-form">
        <div>
          <img className="logo-container-form" src={Logo} alt="Logo-pet" />
        </div>

        <InputField
          id="adotante"
          label="Email:"
          type="text"
          placeholder="Digite seu email"
          value={user}
          onChange={setUser}
        />

        <InputField
          id="adotante"
          label="Senha:"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={setPassword}
        />
        <div id="content-text">
          <Text type="textform">
            Ainda não possui conta?
            <span className="text-link" onClick={redirect}>
              Cadastre-se
            </span>
          </Text>
        </div>
      </section>
      <footer className="container-btn">
        <Button
          name="Entrar"
          identifier="purple"
          icon={Icon}
          onClick={() => handleLogin()}
        />
      </footer>
    </>
  );
}
