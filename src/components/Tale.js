import React, {Component} from 'react';
import {Link} from 'react-router';

class Tale extends Component {

	render() {

		function handleClick(){
			console.log(_id)
		}

		const {_id, title, story, picture} = this.props;

		return (
			<div className="col-md-2 col-sm-6">
				<div className="thumbnail">
					<img src={picture} />
					<div className="caption">
						<h4>{title}</h4>
				 	</div>
				 	<p>
				 		<Link onClick={handleClick} to="showTale" className="btn btn-primary">More Info</Link>
				 	</p>
				</div>
			</div>
		)
	}
};

export default Tale;
