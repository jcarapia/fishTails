import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {

	handleFormSubmit(formProps) {
		console.log(formProps);
		this.props.signinUser(formProps);
	};
	
	render() {
		const {handleSubmit, fields: {username, password}} = this.props;
		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<fieldset className="form-group">
					<label>Username:</label>
					<input className="form-control" {...username}/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input className="form-control" {...password}/>
				</fieldset>
				<button type="submit" className="btn btn-primary">Sign in!</button>
			</form>
		)
	}
};

export default reduxForm({
	form: 'signin',
	fields: ['username', 'password'],
}, null, actions)(Signin);