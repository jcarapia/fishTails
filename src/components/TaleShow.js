import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class TaleShow extends Component {

	componentWillMount(){
		const id = this.props.params.id;
		this.props.fetchTale(id);
	}

	renderTale(){
		const {author, picture, story, title} = this.props.tale;
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

		if(!this.props.tale){
			return (
				<div>
					Loading...
				</div>
			)
		}

		return (
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

function mapStateToProps(state){
	return{
		tale: state.tales.currentTale
	}
}

export default connect(mapStateToProps, actions)(TaleShow);