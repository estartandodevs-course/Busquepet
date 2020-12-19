import HeaderAdoption from "../../../components/HeaderAdoption";
import Profile from "../../../components/Profile";
import ProfileButton from "../../../components/ProfileButton";
import imageArrow from "../../../assets/images/arrowPurple.svg";
import TextDescription from "../../../components/TextDescription";
import "./styles.scss";
import Button from "../../../components/Button";

export default function InfoProfileEdit() {
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
          <Button identifier="whiteOrange" name="Salvar alterações" />
        </div>
      </div>
    </>
  );
}
