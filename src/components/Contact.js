import React, {Component} from 'react';


class Contact extends Component{
	render(){
		return (
			<div className="container" id="contactBlock">
				
				<p className="title">About Jorge Carapia</p>

				<div className="text">

				<div>
					<img id="img-me" src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/11146190_834946386540913_7643510336641704641_n.jpg?oh=5b33836d8c66669d9c15041b5ab6fb06&oe=58C4BAEB" />
				</div>

					<p className="paragraph1">
						Engineer by trade, adventurer by heart. This is how I would describe myself.
						When I am not working on my next application of learning a new technology or cool 
						algorithm I am planning my next adventure. I'm an avid freediver, spearfisher,
						sea kayaker, trail runner,off-roader, mountain biker, hiker, camper, mushroom hunter and wild 
						edible forager to name a few. I'm always on the lookout for the next adventure or 
						taking a current one to the next level.  
					</p>

				</div>
				
				<div className="social-media">
					This is where the social-media icons will go
				</div>

			</div>
		)
	}
};

export default Contact;