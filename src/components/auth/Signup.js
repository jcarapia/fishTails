import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import * as actions from '../../actions';



class Signup extends Component {

	handleFormSubmit(formProps) {
		console.log(formProps);
		this.props.signupUser(formProps);
	};
	

	render() {
		const {handleSubmit, fields: {username, email, password, passwordConfirm}} = this.props;

		return (
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))} >
				<fieldset className="form-group">
					<label>Username:</label>
					<input className="form-control" {...username}/>
				</fieldset>
					<fieldset className="form-group">
					<label>Email:</label>
					<input className="form-control" {...email}/>
				</fieldset>
				<fieldset className="form-group">
					<label>Password:</label>
					<input className="form-control" {...password}/>
				</fieldset>
				<fieldset className="form-group">
					<label>Confirm Password:</label>
					<input className="form-control" {...passwordConfirm}/>
				</fieldset>
				<button type="submit" className="btn btn-primary">Sign up!</button>
			</form>
		)
	}
};

export default reduxForm({
	form: 'signup',
	fields: ['username', 'email', 'password', 'passwordConfirm'],
}, null, actions)(Signup);