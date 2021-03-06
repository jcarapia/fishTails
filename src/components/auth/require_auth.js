import React, {Component} from 'react';
import {connect} from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component {
		static contextTypes = {
			router: React.PropTypes.object
		}

		componentWillMount() {
			console.log('inside the require auth component', this.props.authenticated)
			if(!this.props.authenticated) {
				this.context.router.push('/signin');
			}
		}

		componentWillUpdate() {
			if(!nextProps.authenticated) {
				this.context.router.push('/signin');
			}
		}

		render() {
			return <ComposedComponent {...this.props} />
		}
	}

	function mapStateToProps(state) {
		return {authenticated: state.auth.authenticated};
	}

	return connect(mapStateToProps)(Authentication);
}
