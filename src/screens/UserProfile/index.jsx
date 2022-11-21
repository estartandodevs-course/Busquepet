import { useNavigate } from "react-router-dom";
import {
  HeaderAdoption,
  Profile,
  ProfileButton,
  Text,
  Button,
} from "@/components";

import PlusButton from "@/assets/images/plus-button.svg";
import imageArrow from "@/assets/images/arrowPurple.svg";
import "./styles.scss";

function FlowProfile00() {
  const navigate = useNavigate();

  function goRegister() {
    navigate("/petCadastro");
  }

  return (
    <>
      <HeaderAdoption
        imageOne={imageArrow}
        titleName="Perfil"
        id="headerWhite"
      />
      <Profile />
      <ProfileButton id="line-pet" />
      <div className="container-pet">
        <div className="register-pet">
          <Text type="registerpet">
            Você não possui nenhum pet cadastrado, clique no botão abaixo e
            comece o cadastro!
          </Text>
        </div>
      </div>
      <div className="plus-button">
        <Button onClick={goRegister} className="addpet" icon={PlusButton} />
      </div>
    </>
  );
}

export default FlowProfile00;
