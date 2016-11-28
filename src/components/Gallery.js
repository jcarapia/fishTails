import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';
import Tale from './Tale';

class Gallery extends Component {

	componentWillMount(){
		this.props.fetchTales();
	};

	render() {
		console.log('tales', this.props.tales)
		const tales = this.props.tales

		function renderTales(){		
			if(tales.tales){
				const the_tales = tales.tales;
				return the_tales.map(tale => <Tale key={tale._id} {...tale} />)
			};
		};
		
		return (
			<div>
			<Link to="addTale" className="btn btn-primary" id="addTale">New Fish Tale!</Link>
			<div className="container gallery">
				<div className="row text-center">		
					{renderTales()};			
				</div>					
			</div>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		tales: state.tales
	}
};

export default connect(mapStateToProps, actions)(Gallery);


/*
There is some bug that runs the render function prior to even componentWillMount
at which point the tales array is empty, then it run a second time 
and the array is populated. Thus, the renderStories function checks to 
see if there is any length. This is a work-around to the bug for now. 
*/
