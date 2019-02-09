import React, {Component} from 'react';
import Detail from './Detail';
import axios from "axios";

class Details extends Component {
	state = {
		weathers: [],
		title: null,
		loading: true
	};
	
	async componentDidMount() {
		const woeId = this.props.location.pathname.split('/weather/')[1];
		const res = await axios.get(`https://www.metaweather.com/api/location/${woeId}`);
		
		this.setState({weathers: res.data.consolidated_weather, title: res.data.title, loading: false});
	}
	render() {
		const {title, weathers, loading} = this.state;
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
			)
		}
		
		return (
			<div className="card mb-3">
				<div className="card-header">
					<h2>{title}</h2>
				</div>
				<div className="card-body">
					{weathers.map(w =>
						<Detail key={w.id} weather={w}/>
					)}
				</div>
			</div>
		);
	}
}

export default Details;