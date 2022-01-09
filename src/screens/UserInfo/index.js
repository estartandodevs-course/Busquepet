import {
  HeaderAdoption,
  Profile,
  ProfileButton,
  TextDescription,
  Button,
} from "components";

import imageArrow from "assets/images/arrowPurple.svg";
import editIcon from "assets/images/edit-icon.svg";
import "./styles.scss";

export default function InfoProfile() {
  return (
    <>
      <header>
        <HeaderAdoption
          imageOne={imageArrow}
          titleName="Perfil"
          id="headerWhite"
        />
      </header>
      <Profile />
      <ProfileButton id="line-profile" />

      <div className="info-container">
        <TextDescription title="Nome" description="Henrique Soares" />
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
        <TextDescription title="Endereço" description="Rio de Janeiro" />
        <TextDescription title="Bairro" description="Rio de Janeiro" />
        <div className="button-container">
          <div className="button-unique">
            <Button className="addpet" icon={editIcon} />
          </div>
          <div className="textinfo">
            <p>Apagar conta</p>
            <p>Sair do app</p>
          </div>
        </div>
      </div>
    </>
  );
}
