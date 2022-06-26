import Check from "@/assets/images/Check.svg";
import Pontos from "@/assets/images/pontos.svg";
import { Header, Text, InputField, Button } from "@/components";
import { useState } from "react";
import "./styles.scss";

export default function ImagePet({ setValue, onSubmit }) {
  const [urlImage, setUrlImage] = useState("");
  return (
    <>
      <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!" />
      <div className="container-titleimage">
        <Text type="titleimage">
          As fotos fazem toda a diferença para o bichinho conseguir um lar que
          vai dar amor para ele.
        </Text>
      </div>
      <InputField
        onChange={(event) => setUrlImage(event) || setValue("imagePet", event)}
        id="doador"
        label="Insira a URL da foto do seu bichinho"
        type="text"
      />

      <div className="text-instruction">
        <span className="title-instruction">Como fazer isso:</span>
        <br></br>
        <span className="title-instruction">Passo 01: </span>
        <span>
          Entrar no seu Google Drive, Google Fotos, DropBox ou iCloud e
          identificar qual a foto que você quer enviar;
        </span>
        <br></br>
        <span className="title-instruction">Passo 02: </span>
        <span>
          Ao escolher a foto, você clicar nos três pontinhos ao lado ({" "}
          <img src={Pontos} alt="Três Pontos" /> );
        </span>
        <br></br>
        <span className="title-instruction">Passo 03: </span>
        <span>Procure pela opção de “Copiar Link”</span>
        <br></br>
        <span className="title-instruction">Passo 04: </span>
        <span>Volte aqui e cole o link na caixa de texto.</span>
        <br></br>
        <footer className="container-btn">
          <Button
            disabled={!urlImage}
            onClick={onSubmit}
            className="green"
            name="Finalizar"
            icon={Check}
          />
        </footer>
      </div>
    </>
  );
}
