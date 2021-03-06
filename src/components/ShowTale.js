import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';


class ShowTale extends Component {
	constructor(props){
		super(props)

		this.state = {tale: JSON.parse(localStorage.getItem('fishTail'))}
	}

	componentWillMount(){
		this.setState = JSON.parse(localStorage.getItem('fishTail'));
	}

	renderTale(){
		const tale = this.state.tale;
		console.log('the tale: ', tale);
		const {title, story, picture, author} = tale;

		return (
			<div className="thumbnail">
				<img className="image-responsive" src={picture}/>
				<div className="caption-full">
					<h4>{title}</h4>
					<p>{story}</p>
					<p><em>Submitted by: {author}</em></p>
				</div>
			</div>
		)
	}

	render() {
		return(
			<div className="container showTale">
				<div className="row">
					<div className="col-sm-12">
						{this.renderTale()}
					</div>
				</div>
			</div>
		)
	}
};

export default ShowTale;


