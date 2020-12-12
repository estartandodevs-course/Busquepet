import "./style.scss";
import HeaderAdoption from "../../components/HeaderAdoption";
import imageArrow from "../../assets/images/arrowPurple.svg";
import whatsApp from "../../assets/images/Whatsapp.svg";

export default function ContatoDoador() {
  return (
    <>
      <HeaderAdoption
        imageOne={imageArrow}
        titleName="Doador"
        identification="headerDonor"
      />
      <div className="container">
        <h4 className="title">
          Estamos muito feliz com sua decisão em adotar esse pet! 😻
        </h4>
        <p className="description">
          Agora que você já tamou a melhor decisão e já sabe um pouquinho sobre
          o pet, vamos te mostrar os próximos passos para ter um pacotinho de
          amor na sua casa:
        </p>

        <p className="steps">
          <span>Passo 01</span>: Entre em contato com o Doador;
        </p>

        <p className="steps">
          <span>Passo 02</span>: Ao conversar com o doador, podem decidir o
          melhor local para se encontrarem;
        </p>

        <p className="steps">
          <span>Passo 03</span>: Levar o seu mais novo amigo de 4 patas para
          sua casa e dar muito amor para ele!
        </p>

        <p className="footer">
          Você pode escolher entrar em contato com o doador por meio do WhatsApp
          ou E-mail que estão abaixo:
        </p>

        <button className="ButtonWhatsApp">
          WhatsApp do Doador <img src={whatsApp} alt="WhatsApp"></img>
        </button>
      </div>
    </>
  );
}
