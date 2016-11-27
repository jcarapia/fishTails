import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Gallery extends Component {

	componentDidMount(){
		this.props.fetchTales();
	};

	render() {
		console.log('tales', this.props.tales)
		const tales = this.props.tales

		function renderStories(){		
			
			if(tales.length > 0){

				return tales[0].map(tale => <li>{tale.title}</li>)
			}
		}
		
		return (
			<div>
				the Gallery
				<ul>
				{renderStories()}
				</ul>
			</div>
		)
	}
};

function mapStateToProps(state) {
	return {
		tales: state.tale
	}
};

export default connect(mapStateToProps, actions)(Gallery);


/*
There is some bug that runs the render function prior to even componentWillMount
at which point the tales array is empty, then it run a second time 
and the array is populated. Thus, the renderStories function checks to 
see if there is any length. This is a work-around to the bug for now. 
*/
