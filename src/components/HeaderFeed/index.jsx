import './styles.scss';
import Text from '../Text';
export default function HeaderFeed(props) {
	const { image, title, onClick} = props;

	return (
		<>
			<header className="header-feed">
				<div className="content-header-feed">
					<Text className="titulo" type="titleheader">
						{title}
					</Text>
				</div>
				<div className="container-icon">
					<img className="image-icon" onClick={onClick} src={image} alt="#" />
				</div>
			</header>
		</>
	);
}
