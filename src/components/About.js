import React, {Component} from 'react'; 

class About extends Component {
	render(){
		return (
			<div className="container" id="aboutBlock">
				
				<p className="title">About <span className="brand">fishTails</span></p>

				<hr></hr>

				<div className="text">

					<p className="paragraph1">
					Welcome to fishTails! fishTails is an awesome application that will allow you to 
					share your fishing tales and pictures with the world. Getting started is quite simple. 
					Signing up will provide you access to create a new tale. Once signed in, you can write 
					your tale and share a picture by entering the url since at the moment the site does not
					support file uploads.
					</p>

					<p>
				   Why did I build fishTails&#63; I wanted to combine my passions &#45; fishing, adventures, 
					 and using technology to bring people together and share knowledge, ideas and stories. 
					 I hope you get as much enjoyment using the site as I did building it.
					</p>

					<p>
					  As for the technical details behind fishTails. It is built using React & Redux with 
						MongoDB as the database and NodeJS as a backend environment. For the styling, I utilized
						Bootstrap. 
					</p>
				</div>

			</div>
		)
	}
};

export default About;