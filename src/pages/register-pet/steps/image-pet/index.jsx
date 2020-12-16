import './Style.scss';
import Header from '../../../../components/Header/index';
import Text from '../../../../components/Text/index'
import InputField from '../../../../components/InputField/index';
import Button from '../../../../components/Button/index'
import Check from '../../../../assets/images/Check.svg'
import Pontos from '../../../../assets/images/pontos.svg'

export default function ImagePet({setValue}){

    return (
        <>
            <Header title="Vamos ajudar o bichinho a encontrar um lar de amor?!"></Header>
            <Text type="titleform">As fotos fazem toda a diferença para o bichinho conseguir um lar que vai dar amor para ele.</Text>
            <InputField idendifier="doador" label="Insira a URL da foto do seu bichinho" type="text" name="Url" onChange={(event) => setValue("Url", event)} />

            <div className="text-instruction">
                <span className="title-instruction">Como fazer isso:</span><br></br>
                <span className="title-instruction">Passo 01: </span><span>Entrar no seu Google Drive, Google Fotos, DropBox ou iCloud e identificar qual a foto que você quer enviar;</span><br></br>
                <span className="title-instruction">Passo 02: </span><span>Ao escolher a foto, você clicar nos três pontinhos ao lado ( <img src={Pontos} alt="Três Pontos" /> );</span><br></br>
                <span className="title-instruction">Passo 03: </span><span>Procure pela opção de “Copiar Link”</span><br></br>
                <span className="title-instruction">Passo 04: </span><span>Volte aqui e cole o link na caixa de texto.</span><br></br>
            </div>

            <footer className="container-btn">
                <Button identifier="green" name="Finalizar" icon={Check}></Button>
            </footer>
        </>
    )
}