import { useHistory, useParams } from "react-router-dom";
import "./Style.scss";
import TextDescription from "../../components/TextDescription";
import Button from "../../components/Button/index";
import imageArrow from "../../assets/images/arrowPurple.svg";
import purpleHeart from "../../assets/images/purpleHeart.svg";
import HeaderAdoption from "../../components/HeaderAdoption";
import { getPetById } from "../../services/pets.service";

export default function PerfilPet() {
  const history = useHistory();

  function goContact() {
    history.push("/contato-doador");
  }

  const { id } = useParams();
  const pet = getPetById(id);
  const { namePet, agePet, imagePet } = pet;
  console.log(pet);
  return (
    <>
      <HeaderAdoption
        imageOne={imageArrow}
        titleName={namePet}
        imageTwo={purpleHeart}
        identification="headerWhite"
      />

      <main>
        <img src={imagePet} alt="cachorro imagem" />

        <div className="dogData">
          <div className="dogCerto">
            <TextDescription title="Nome" description={namePet} />
          </div>

          <div className="dogCerto">
            <TextDescription title="Idade" description={agePet} />
          </div>

          <div className="dogCerto">
            <TextDescription title="Porte" description="Médio" />
          </div>

          <div className="dogCerto">
            <TextDescription title="Gênero" description="Fêmea" />
          </div>

          <div className="dogCerto">
            <TextDescription
              title="Vacinação"
              description="Todas as vacinas necessárias"
            />
          </div>

          <div className="dogCerto">
            <TextDescription
              title="Localização"
              description="Rio de Janeiro - RJ"
            />
          </div>

          <div className="localizacao">
            <span>
              {/* Adicionando o feed na anchor pra não dar erro no deploy, mas depois será mudado */}
              {/* <span onClick={Feed}>Ver mais...</span> */}
            </span>
          </div>

          <div className="dogCerto">
            <TextDescription title="Doador" description="Henrique Soares" />
          </div>
        </div>

        <section className="description">
          <h3>Descrição</h3>
          {/* {// Depois vai ser passada como props, mas atualmente será feito só a tela.}
          <p className="paragraph">{description}</p> */}
          <p className="paragraph">
            A Melzinha foi encontrada próximo à minha casa, porém não tenho
            condinções de cuidar dela, já tenho animais em casa. Ela é muito
            dócil e se adapta muito rápido ao ambiente.. Lorem ipsum Lorem ipsum
            Lorem Ipsum.
          </p>
        </section>

        <div id="position">
          <Button
            onClick={goContact}
            identifier="gradient"
            name="Quero adotar"
          ></Button>
        </div>
      </main>
    </>
  );
}
