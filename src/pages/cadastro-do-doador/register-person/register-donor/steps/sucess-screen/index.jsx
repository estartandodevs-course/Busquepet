import Icon from '../../../../../../assets/images/SetaProx.svg';
import Logo from '../../../../../../assets/images/groundimg.png';
import Button from '../../../../../../components/Button';
import Text from '../../../../../../components/Text';
import { useHistory } from 'react-router-dom';
import './styles.scss';

export default function SucessScreen() {
	const history = useHistory("");

	function redirect() {
		history.push("/feed")
	}
	return (
		<>
			<main id="content-master">
				<Text type="textfinal">Seu perfil foi cadastrado com sucesso!! </Text>
				<img className="image-logo" src={Logo} alt="Logo-pet" />
				<Text type="textfinal2">
					Agora, vamos cadastrar o seu animalzinho?!
				</Text>
			</main>
			<footer id="content-btn">
				<Button onClick={redirect} name="Vamos" identifier="green" icon={Icon} />
			</footer>
		</>
	);
}
