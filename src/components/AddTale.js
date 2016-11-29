import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../actions';

class AddTale extends Component {

	handleFormSubmit(formProps){
		const loggedUser = this.props.loggedUser;
		this.props.addTale(formProps, loggedUser);
	};

	render() { 

		const {handleSubmit, fields: {title, story, picture}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Title:</label>
					<input className="form-control" {...title} placeholder="Give your tale a title..." />
				</fieldset>
				<fieldset className="form-group">
					<label>Story:</label>
					<textarea className="form-control" {...story} placeholder="Provide a tale..."></textarea>
				</fieldset>
				<fieldset className="form-group">
					<label>Picture Link:</label>
					<input className="form-control" {...picture} placeholder="Provide a link to your picture..."></input>
				</fieldset>
				<button type="submit" className="btn btn-primary">Submit fishTail!</button>
			</form>
		)
	}
};

function mapStateToProps(state){
	return {
		loggedUser: state.auth.user
	}
}

export default reduxForm({
	form: 'addTale',
	fields: ['title', 'story', 'picture'],
}, mapStateToProps, actions)(AddTale);
