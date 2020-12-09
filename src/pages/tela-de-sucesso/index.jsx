import Icon from "../../assets/images/SetaProx.svg"
import Logo from "../../assets/images/groundimage.png"
import Button from "../../components/Button"
import Text from "../../components/Text"
export default function SucessScream() {
    return (
        <>
            <Text type="textfinal">Seu perfil foi cadastrado com sucesso!! </Text>



            <Text type="textfinal2">Agora, vamos cadastrar o seu animalzinho?! </Text>
            <Button
                name="Vamos"
                identifier="green"
                icon={Icon}



            />




        </>

    )
}
