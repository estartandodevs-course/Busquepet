import './styles.scss';
import Text from '../Text';
import img from '../../assets/images/groundimg.png';
import seta from '../../assets/images/seta.svg';
export default function CardComponent(props) {
	const { image, icon, location } = props;
	return (
		<>
			<section className="container-card">
				<div className="container-img">
					<img src={img} alt="#" />
				</div>
				<div className="content-card">
					<Text type="labelform">Melzinha</Text>
					<Text type="labelform">1 - 3 meses</Text>
					<img src={seta} alt="#" />
				</div>
			</section>
		</>
	);
}
