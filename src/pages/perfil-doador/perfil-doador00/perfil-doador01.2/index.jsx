import './Style.scss';
import HeaderAdoption from "../../../../components/HeaderAdoption";
import imageArrow from "../../../../assets/images/arrowPurple.svg";
import Profile from "../../../../components/Profile";
import ProfileButton from "../../../../components/ProfileButton";
import TextDescription from '../../../../components/TextDescription';
import Button from "../../../../components/Button";
import Pen from "../../../../assets/images/Pen.svg";



function FlowProfile01_2(){
    return(
        <>
            <HeaderAdoption
                imageOne={imageArrow}
                titleName="Perfil"
                identification="headerWhite"
            />

            <Profile />
            <ProfileButton/>
            
            <div className="dogData">
                <div className="dogCerto">
                    <TextDescription title="Nome" description="Melzinha"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Idade" description="1 - 3 meses"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Porte" description="Porte"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Gênero" description="Fêmea"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Vacinação" description="Todas as vacinas necessárias"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Localização" description="Rio de Janeiro - RJ"></TextDescription>
                </div>

                <div className="dogCerto">
                    <TextDescription title="Descrição" description="A Melzinha foi encontrada próximo à minha casa, porém não tenho condinções de cuidar dela, já tenho animais em casa. Ela é muito dócil e se adapta muito rápido ao ambiente."></TextDescription>
                </div>

                <div className="plus-button">
                    <Button identifier="addpet" icon={Pen} />
                </div>
            </div>
        </>
    )
}

export default FlowProfile01_2;