/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import { Text } from "@/components";
import "./styles.scss";

const ProfileButton = ({ id }) => {
  const navigate = useNavigate();

  function goProfile() {
    navigate("/perfiledit");
  }

  function goBack() {
    navigate("/perfil");
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
