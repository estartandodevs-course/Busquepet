import './styles.scss'
import Text from '../../../components/Text'
import RadioButton from '../../../components/RadioButton'
import Button from '../../../components/Button'
import Icon from '../../../assets/images/SetaProx.svg'
import Header from '../../../components/Header'
import { useState } from 'react'


export default function RegisterAdopter() {

    const [person, setPerson] = useState("")
    return (
        <>
            <Header title="Você quer doar!" subTitle="Vamos lá!" />
            <Text type="titleform">Vamos começar!</Text>
            <section className="contentform">
                <div className="form">
                    <div className="textform">
                        <Text type="labelform">Você é:</Text>
                    </div>
                    <div className="form-box">
                        <RadioButton text="Pessoa Física" name="typePerson" id="Pessoa Física" onChange={setPerson} />
			            <RadioButton text="Pessoa Jurídica (ONG)" name="typePerson" id="Pessoa Jurídica (ONG)" onChange={setPerson} />
                    </div>
                </div>
            </section>
                <div className="button-skip" >
                    <Button name="Próximo" identifier="green" icon={Icon} onClick={() => console.log(person)} />
                </div>
        </>
    )
}

