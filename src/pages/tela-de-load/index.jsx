import Logo from '../../assets/images/groundimg.png';
import './styles.scss';

export default function Loading() {
	return (
		<>
			<section id="container-load">
				<img className="image-load" src={Logo} alt="Logo-pet" />
			</section>
		</>
	);
}
