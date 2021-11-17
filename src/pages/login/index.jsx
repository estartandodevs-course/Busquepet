import { useState } from "react";
// import Button from "../../components/Button";
import Button from "../../components/Button/index";
import Text from "../../components/Text";
import Logo from "../../assets/images/logo.svg";
import InputField from "../../components/InputField";
import Icon from "../../assets/images/Check.svg";
import "./styles.scss";
import { login } from "../../services/auth.service";
import { useHistory } from "react-router-dom";


export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  


  async function handleLogin() {
    const responseLogin = await login(user, password);
    
    if (responseLogin.success === true) {
      history.push("/feed")
    } else {
      alert("Erro com email ou senha, tente novamente!")
    }
  }

  function redirect() {
    history.push("/cadastro-tipo-de-pessoa")
  }
  return (
    <>
      <section className="container-form">
        <div>
          <img className="logo-container-form" src={Logo} alt="Logo-pet" />
        </div>

        <InputField
          idendifier="doador"
          label="Email:"
          type="text"
          placeholder="Digite seu email"
          value={user}
          onChange={setUser}
        />

        <InputField
          idendifier="doador"
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
          typeVariant='Purple'
          name="Entrar"
          icon={Icon}
          onClick={handleLogin}
        />
      </footer>
    </>
  );
}
