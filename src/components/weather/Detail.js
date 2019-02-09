import React from 'react'

function Detail(props) {
	const {weather} = props;
	return (
		<React.Fragment>
			<ul>
				<li>
					<b>{new Date(weather.applicable_date).toDateString()}</b>
					<img className="float-right" src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} alt="" height="25px"/>
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
						<li>
							Humidity: {weather.humidity}%
						</li>
						<li>
							Air Pressure: {parseInt(weather.air_pressure)} atm
						</li>
						<li>
							Wind Speed: {parseInt(weather.wind_speed)} km/h
						</li>
						<li>
							Wind Direction: {parseInt(weather.wind_direction)}° {weather.wind_direction_compass}
						</li>
					</ul>
				</li>
			</ul>
		</React.Fragment>
	);
}

export default Detail;