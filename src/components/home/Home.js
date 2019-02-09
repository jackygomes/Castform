import React, {Component} from 'react';
import Weather from '../weather/Weather';

class Home extends Component {
	componentWillMount() {
		if (window.location.pathname === "/") {
			this.props.history.push("/home");
		}
	}
	
	render() {
		return (
			<div className="container">
				<div className="card">
					<div className="card-header"><h1>Castform</h1></div>
				</div>
				<div className="row">
					<div className="col-md-4"><Weather city="istanbul"/></div>
					<div className="col-md-4"><Weather city="berlin"/></div>
					<div className="col-md-4"><Weather city="london"/></div>
					<div className="col-md-6"><Weather city="helsinki"/></div>
					<div className="col-md-6"><Weather city="vancouver"/></div>
				</div>
			</div>
		);
	}
}

export default Home;