/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from "react-router-dom";
import Text from "../../components/Text";
import "./styles.scss";

const ProfileButton = ({ id }) => {
  const { push } = useHistory();

  function goProfile() {
    push("/perfil-edit");
  }

  function goBack() {
    push("/perfil");
  }

  return (
    <>
      <div className="container-buttonprofile">
        <a href="#" onClick={goProfile}>
          <Text type="profilebutton">Seu perfil</Text>
        </a>
        <a href="#" onClick={goBack}>
          <Text type="profilebutton">Seu Pet</Text>
        </a>
      </div>
      <div className="border">
        <div className={id}></div>
      </div>
    </>
  );
};

export default ProfileButton;
