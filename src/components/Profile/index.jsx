import Text from "../Text";
import ProfileDefault from "../../assets/images/profile-default.svg";
import EditProfile from "../../assets/images/edit-profile.svg";
import "./styles.scss";

const Profile = () => (
  <div className="container-profile">
    <div className="photo-profile">
      <img src={ProfileDefault} alt="profile-default" />
      {/* Lembrar que isso vai ser um botão */}
      <img src={EditProfile} alt="Edit Profile" className="float-button" />
    </div>
    <Text type="profilename">Olá, Henrique Soares</Text>
  </div>
);

export default Profile;
