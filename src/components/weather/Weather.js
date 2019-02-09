import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

class Weather extends Component {
	state = {
		woeId: null,
		weather: {
			the_temp: null,
			min_temp: null,
			max_temp: null,
			weather_state_abbr: null
		},
		loading: true
	};
	
	async componentDidMount() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		var yyyy = today.getFullYear();
		
		if (dd < 10) {
			dd = '0' + dd;
		}
		
		if (mm < 10) {
			mm = '0' + mm;
		}
		
		today = yyyy + '-' + mm + '-' + dd;
		const res = await axios.get(`https://www.metaweather.com/api/location/search/?query=${this.props.city}`);
		const weatherDetails = await axios.get(`https://www.metaweather.com/api/location/${res.data[0].woeid}/`);
		const latestWeather = weatherDetails.data.consolidated_weather.filter(w => w.applicable_date === today)[0] === 'undefined' ?
			weatherDetails.data.consolidated_weather.filter(w => w.applicable_date === today)[0] :
			weatherDetails.data.consolidated_weather[0];
		
		this.setState({
			woeId: res.data[0].woeid,
			weather: latestWeather,
			loading: false
		});
	}
	
	render() {
		const {weather, woeId, loading} = this.state;
		if (loading === true) {
			return (
				<div className="card mb-3">
					<div className="card-body">
						<div className="lds-ring">
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>
					</div>
				</div>
			);
		}
		
		return (
			<div className="card mb-3">
				<div className="card-header">
					<Link to={`/weather/${woeId}`}><h2 className="text-uppercase" style={{height: "0px"}}>{this.props.city}</h2>
					</Link>
					<img className="float-right"
							src={`https://www.metaweather.com/static/img/weather/${weather !== 'undefined' ? weather.weather_state_abbr : 's'}.svg`} alt=""
								height="25px"/>
					<h4 className="float-right" style={{height: "0px"}}>{parseInt(weather.the_temp)}°c &nbsp;</h4>
				</div>
				<div className="card-body">
					<ul>
						<li>
							Temperature: {parseInt(weather.the_temp)}°c
						</li>
						<li>
							Maximum Temperature: {parseInt(weather.max_temp)}°c
						</li>
						<li>
							Minimum Temperature: {parseInt(weather.min_temp)}°c
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default Weather;