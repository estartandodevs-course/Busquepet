import HeaderAdoption from "../../../components/HeaderAdoption";
import imageArrow from "../../../assets/images/arrowPurple.svg";
import Profile from "../../../components/Profile";
import ProfileButton from "../../../components/ProfileButton";
import Text from "../../../components/Text";
import PlusButton from "../../../assets/images/plus-button.svg";
import Button from "../../../components/Button";
import "./styles.scss";
import { useHistory } from "react-router-dom";

function FlowProfile00() {

  const history = useHistory("")

  function goRegister () {
    history.push("/registro-doador")
  }

  return (
    <>
      <HeaderAdoption
        imageOne={imageArrow}
        titleName="Perfil"
        identification="headerWhite"
      />
      <Profile />
      <ProfileButton />
      <div className="container-pet">
        <div className="register-pet">
          <Text type="registerpet">
            Você não possui nenhum pet cadastrado, clique no botão abaixo e
            comece o cadastro!
          </Text>
        </div>
      </div>
      <div className="plus-button">
        <Button onClick={goRegister} identifier="addpet" icon={PlusButton} />
      </div>
    </>
  );
}

export default FlowProfile00;
