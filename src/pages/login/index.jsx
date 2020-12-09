import { useState } from 'react';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Logo from '../../assets/images/Group-107.svg';
import { InputField } from '../../components/InputField';
import Icon from '../../assets/images/SetaProx.svg';
import './styles.scss';
export default function Login(props) {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const { href } = props;

	function handleLogin() {
		// Implementar funcionalidade do login
		console.log(user, password);
	}
	return (
		<>
			<section className="container-form">
				<div>
					<img className="logo-container-form" src={Logo} alt="Logo-pet" />
				</div>

				<InputField
					label="Usuário :"
					type="text"
					placeholder="Digite seu usuário..!!"
					value={user}
					onChange={setUser}
				/>

				<InputField
					label="Senha :"
					type="password"
					placeholder="Digite sua senha.."
					value={password}
					onChange={setPassword}
				/>
				<div id="content-text">
					<Text type="textform">
						Ainda não possui conta? <br />
						<a className="text-link" href={href}>
							Cadastre-se
						</a>
					</Text>
				</div>
			</section>
			<footer className="container-btn">
				<Button
					name="Login"
					identifier="green"
					icon={Icon}
					onClick={handleLogin}
				/>
			</footer>
		</>
	);
}
