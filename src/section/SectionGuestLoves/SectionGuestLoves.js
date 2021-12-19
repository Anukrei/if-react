import React from 'react';
import Section from '../../components/Section/Section';
import Container from '../../components/Container/Container';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import dataHotels from '../../variables/dataHotels';

import '../../components/App/App.css';

export default function SectionGuestLoves() {
	return (
		<Section clas="guest-loves">
			<Container>
				<Title text="Homes guests loves" className="guests-loves__header" />
				<Card dataSearch={dataHotels} />
			</Container>
		</Section>
	);
}
