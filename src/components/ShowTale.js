import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ShowTale extends Component {


	render() {

		//const tale = "https://farm3.staticflickr.com/2269/1621457215_6d071e57ba.jpg";
		const tale = "https://farm5.staticflickr.com/4078/4859517719_f8a9aba7dc.jpg";
		const title = 'The title';
		const author = 'Joe Blow';
		const story = "blah blah blah";

		return(
			<div className="container showTale">
				<div className="row">
					<div className="col-sm-12">
						<div className="thumbnail">
							<img className="image-responsive" src={tale}/>
							<div className="caption-full">
								<h4>{title}</h4>
								<p>{story}</p>
								<p><em>Submitted by: {author}</em></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};

export default ShowTale;


