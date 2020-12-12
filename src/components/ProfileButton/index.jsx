import Text from "../../components/Text";
import "./styles.scss";
export default function ProfileButton() {
  return (
    <>
      <div className="container-buttonprofile">
        <a href="#">
          <Text type="profilebutton">Seu perfil</Text>
        </a>
        <a href="#">
          <Text type="profilebutton">Seu Pet</Text>
        </a>
      </div>
      <div className="borda">
        <div className="line"></div>
      </div>
    </>
  );
}
