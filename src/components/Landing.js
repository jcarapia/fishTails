import React, {Component} from 'react';
import {Link} from 'react-router';

class Landing extends Component {
	render() {
	return (
		<div id="content">
			<h1>fishTails</h1>
			<Link to="/gallery"><button className="btn btn-success">Click to Start!</button></Link>
		</div>
	)
}
}
export default Landing;