var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
	render: function(){
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
			        <li><Link to="signup"><i className="fa fa-user-plus" aria-hidden="true"></i> Signup</Link></li>
			        <li><Link to="signin"><i className="fa fa-user" aria-hidden="true"></i> Signin</Link></li>
			      </ul>
			    </div>
			    </div>
			</nav>
		)
	}
});

module.exports = Navigation;