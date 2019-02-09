import React, {Component} from 'react';
import Home from './components/home/Home';
import Header from './components/layout/Header';
import Search from './components/pages/Search';
import Details from './components/weather/Details';
import NotFound from './components/pages/NotFound';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
	render() {
		return (
				<Router basename={process.env.PUBLIC_URL}>
					<div className="App">
						<Header branding="Castform"/>
						<div className="container">
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/home" component={Home}/>
								<Route exact path="/search/:keyword" component={Search}/>
								<Route exact path="/weather/:woeId" component={Details}/>
								<Route component={NotFound}/>
							</Switch>
						</div>
					</div>
				</Router>
		);
	}
}

export default App;
