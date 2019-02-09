import React, {Component} from 'react';
import axios from 'axios';
import Weather from '../weather/Weather';
import uuid from 'uuid';

class Search extends Component {
	state = {
		cities: []
	};
	
	async componentDidMount() {
		const keyword = this.props.location.pathname.split('/')[2];
		const cities = await axios.get(`https://www.metaweather.com/api/location/search/?query=${keyword}`);
		this.setState({cities: cities.data});
	}
	
	render() {
		if (this.state.cities.length === 0) {
			return (
				<div>
					<h2>No results were found. Try changing the keyword!</h2>
				</div>
			);
		}
		
		return (
			<div>
				{this.state.cities.map(city =>
					<Weather city={city.title} key={uuid()}/>
				)}
			</div>
		);
	}
}

export default Search;