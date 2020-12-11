import React from 'react';
import iconPerfil from '../../assets/images/accountCircle.svg';
import CardComponent from '../../components/CardComponent';
import filterPet from '../../assets/images/Filter-Pet.png';
import HeaderFeed from '../../components/HeaderFeed';
import afonso from '../../assets/images/afonso.svg';
import mel from '../../assets/images/mel.svg';
import stark from '../../assets/images/stark.svg';
import timao from '../../assets/images/timao-e-pumba.svg';
import venus from '../../assets/images/venus.svg';
import './styles.scss';

export default function Feed() {
	return (
		<>
			<header className="container-header">
				<HeaderFeed title="BUSQUEPET" image={iconPerfil} />
			</header>
			<div className="container-filter">
				<div className="content-filter">
					<img src={filterPet} alt="Filtro do pet" />
				</div>
			</div>
			<section className="container-main">
				<CardComponent image={afonso} name="Afosinho" age="1 - 3 meses" />
				<CardComponent image={stark} name="Stark" age=" 1 - 3 meses" />
				<CardComponent image={mel} name="Mel" age="1 ano" />
				<CardComponent image={timao} name="Timão" age=" 1 - 2 meses" />
				<CardComponent image={venus} name="Vênus" age=" 2 anos" />
			</section>
		</>
	);
}
