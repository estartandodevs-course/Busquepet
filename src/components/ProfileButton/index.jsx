/* eslint-disable jsx-a11y/anchor-is-valid */
import { useHistory } from "react-router-dom";
import Text from "../../components/Text";
import "./styles.scss";
export default function ProfileButton({identificador}) {
  
  const history = useHistory("")

  function goProfile () {
    history.push("/perfil-edit")
  }

  function goBack() {
    history.push("/perfil")
  }
  
  return (
    <>
      <div className="container-buttonprofile">
        <a href="#" onClick={goProfile} >
          <Text type="profilebutton">Seu perfil</Text>
        </a>
        <a href="#" onClick={goBack} >
          <Text type="profilebutton">Seu Pet</Text>
        </a>
      </div>
      <div className="borda">
        <div className={identificador}></div>
      </div>
    </>
  );
}
