import HeaderAdoption from "../../../components/HeaderAdoption";
import Profile from "../../../components/Profile";
import ProfileButton from "../../../components/ProfileButton";
import imageArrow from "../../../assets/images/arrowPurple.svg";
import TextDescription from "../../../components/TextDescription";
import Button from "../../../components/Button";
import editIcon from "../../../assets/images/edit-icon.svg"
import "./styles.scss";

export default function InfoProfile() {
  return (
    <>
      <header>
        <HeaderAdoption
          imageOne={imageArrow}
          titleName="Perfil"
          identification="headerWhite"
        />
      </header>
      <Profile />
      <ProfileButton identificador="line-profile" />

      <div className="info-container">
        <TextDescription title="Nome" description="EzReal Blindado" />
        <TextDescription title="WhatsApp" description="+55 00 0 0000-0000" />
        <TextDescription
          title="E-mail"
          description="henriquesoarespet@gmail.com"
        />
        <TextDescription title="Senha" description="*********" />
        <TextDescription title="Cep" description="00000-000" />
        <TextDescription
          title="Localização"
          description="Rio de Janeiro - RJ"
        />
        <TextDescription title="Endereço" description="Rua dos Pet Fofinhos" />
        <TextDescription title="Bairro" description="Dog Cat" />
        <div className="button-container">
          <Button identifier="addpet" icon={editIcon} />
        </div>
      </div>
    </>
  );
}
