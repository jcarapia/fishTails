import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions';





class Navigation extends Component {

	renderAuthButtons() {
		if(!this.props.auth.authenticated){
			return (
				[
					<li><Link to="signup"><i className="fa fa-user-plus" aria-hidden="true"></i> Signup</Link></li>,
		    	<li><Link to="signin"><i className="fa fa-user" aria-hidden="true"></i> Signin</Link></li>
		    ]
			)
		} else {
			const signedinUser = this.props.auth.user
			return (
				 <li><Link to="/"><span id="welcomeUser">Welcome {signedinUser}!</span><i className="fa fa-user-times" aria-hidden="true"></i> Log Out</Link></li>
			)
		}
	};


	render() {

		return (
			<nav className="navbar navbar-inverse">
				<div className="container-fluid">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href="/"><span className="brand">fishTails</span></a>
			    </div>

			    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			      <ul className="nav navbar-nav">
			        <li className="active"><IndexLink to="/">Home</IndexLink></li>
			        <li><Link to="/gallery" >Gallery</Link></li>
			        <li><Link to="/about" >About</Link></li>
			        <li><Link to="/contact" >Contact</Link></li>			        
			      </ul>

			      <ul className="nav navbar-nav navbar-right">
			        {this.renderAuthButtons()}
			      </ul>
			    </div>
			    </div>
			</nav>
		)
	}
};

function mapStateToProps(state){
	return { 
		auth: state.auth
	}
}

export default connect(mapStateToProps, actions)(Navigation);


