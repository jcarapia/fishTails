import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import * as actions from '../actions';

class Tale extends Component {

	handleClick(){
		const pictureId = this.props._id;
		this.props.fetchTale(pictureId);
	}

	render() {
		const {_id, title, story, picture} = this.props;
		return (
			<div className="col-md-2 col-sm-6">
				<div className="thumbnail">
					<img src={picture} />
					<div className="caption">
						<h4>{title}</h4>
				 	</div>
				 	<p>
				 		<Link onClick={this.handleClick.bind(this)} to={'gallery/' + _id} className="btn btn-primary">More Info</Link>
				 	</p>
				</div>
			</div>
		)
	}
};

export default connect(null, actions)(Tale);
