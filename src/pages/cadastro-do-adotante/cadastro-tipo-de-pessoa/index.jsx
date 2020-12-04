import './styles.scss'
import Text from '../../../components/Text'
import RadioButton from '../../../components/RadioButton'
import Button from '../../../components/Button'
import Icon from '../../../assets/images/SetaProx.svg'

export default function RegisterAdopter() {
    return (
        <>
            <div className="header">
                <div className="textheader">
                    <Text type="titleheader" >Header vai ser substituido</Text>
                    <Text type="subtitleheader" >Tamo esperando o header da pietra</Text>
                </div>
            </div>
            <Text type="titleform">Vamos começar!</Text>
            <section className="contentform">
                <div className="form">
                    <div className="textform">
                        <Text type="labelform">Você é:</Text>
                    </div>
                    <div className="form-box">
                        <RadioButton text="Pessoa Física" name="typePerson" id="Pessoa Física" />
                        <RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="Pessoa Física" />
                    </div>
                </div>
            </section>
                <div className="button-skip" >
                    <Button name="Próximo" identifier="green" icon={Icon} />
                </div>
        </>
    )
}