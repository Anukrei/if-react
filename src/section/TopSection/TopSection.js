import React, { Component } from 'react';
import Container from '../../components/Container/Container';
import Section from '../../components/Section/Section';
import Title from '../../components/Title/Title';
import Card from '../../components/Card/Card';
import getData from '../../helpers/getData';

import './TopSection.css';

import BASE_API_URL from '../../variables/urls';

import log from './img/logoBig.svg';
import acc from './img/sprite.svg';
import googlePay from './img/google-play-badge.svg';
import appStore from './img/downloadAppStore.svg';

export default class TopSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchText: '',
			searchResult: [],
			count: 0,
		};
	}

	handleSearchtext = (event) => {
		this.setState({ searchText: event.target.value });
	}

	handleSearchResult = async (event) => {
		event.preventDefault();
		const { searchText, count } = this.state;
		const text = new RegExp(`.*${searchText}+.*`, 'gim');
		const result = [];
		const dataHotels = await getData({ url: BASE_API_URL, text: searchText });

		if (searchText.length === 0) {
			alert('Enter search data, please');
			return;
		}

		dataHotels.forEach((currentValue) => {
			const tempValue = currentValue.country + currentValue.city + currentValue.name;

			if (!(tempValue.search(text))) {
				result.push(currentValue);
			}
		});

		this.setState({ searchResult: result });
		this.setState({ count: count + 1 });
	}

	render() {
		const { searchResult, count } = this.state;
		const header = (
			<header>
				<Container>
					<div className="header">
						<div className="header-row">
							<div className="header-heading__logo">
								<img src={log} alt="TripHouse" className="header-heading__logo-big" />
							</div>
							<div className="header-menu-wrapper__col">
								<nav>
									<div className="header-menu">
										<a href="#" className="header-menu__link">Stays</a>
										<a href="#" className="header-menu__link">Attractions</a>
									</div>
								</nav>
								<div className="header-img-btn">
									<svg viewBox="0 0 30 30" className="header-img-btn__night">
										<use xlinkHref={acc + '#night-button'} />
									</svg>
									<svg viewBox="0 0 40 40" className="header-img-btn__profile">
										<use xlinkHref={acc + '#account-button'} />
									</svg>
								</div>
							</div>
						</div>
						<div className="header-title-row">
							<div className="header-title__title">
								<h1>
										Discover stays
									<br />
										to live, work or just relax
								</h1>
							</div>
						</div>
						<form className="header-form row" id="header-form">
							<div className="header-form-input-row">
								<div className="header-form-input__wrap">
									<input type="text" id="city" name="search" required autoComplete="off" onChange={this.handleSearchtext} />
									<label htmlFor="city" className="city">Your destination or hotel name</label>
								</div>
								<div className="header-form-input__wrap">
									<input type="text" id="date" required name="date" autoComplete="off" />
									<label htmlFor="date" className="date">Check-in — Check-out</label>
								</div>
								<div className="header-form-input__wrap" id="header-form-input__wrap-people">
									<input type="text" id="people" required name="people" autoComplete="off" />
									<label htmlFor="people" className="people" id="label_people">Adults - Children - Room</label>
								</div>
								<div className="header-form-input__wrap"><input type="submit" value="Search" onClick={this.handleSearchResult} /></div>
							</div>
						</form>
						<div className="header-download-link-row">
							<img src={googlePay} alt="download link Google Play" />
							<img src={appStore} alt="download link AppStore" />
						</div>
					</div>
				</Container>
			</header>
		);
		if (count === 0) {
			return (
				<>
					{ header }
				</>
			);
		} else if (count > 0 && searchResult.length === 0) {
			return (
				<>
					{ header }
					<Section>
						<Container>
							<Title text="Available Hotels" className="guests-loves__header" />
							<div className="not-date">Not valid data for search, repeat please</div>
						</Container>
					</Section>
				</>
			);
		} else if (count > 0 && searchResult.length > 0) {
			return (
				<>
					{ header }
					<Section>
						<Container>
							<Title text="Available Hotels" className="guests-loves__header" />
							<Card dataSearch={searchResult} />
						</Container>
					</Section>
				</>
			);
		}
	}
}
