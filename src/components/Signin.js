var React = require('react');

var LoginRegister = React.createClass({
	render: function(){
		return (
	<div id="loginRegister">		
		<div className="row">
	        <div className="container">
	            <div className="login-register-form-section">
	                <ul className="nav nav-tabs" role="tablist">
	                    <li className="active"><a href="#login" data-toggle="tab">Login</a></li>
	                    <li><a href="#register" data-toggle="tab">Register</a></li>
	                </ul>
	                <div className="tab-content">
	                    <div role="tabpanel" className="tab-pane fade in active" id="login">
	                        <form className="form-horizontal" method="post" action="">
	                            <div className="form-group " >
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-user"></i></div>
	                                    <input type="text" name="login_email" className="form-control" placeholder="Username" required="required" value="" />
	                                </div>
	                            </div>
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-key"></i></div>
	                                    <input type="password" name="login_password" className="form-control" placeholder="Password" required="required" />
	                                </div>
	                            </div>
	                            <div className="form-group">                          
	                                <a href="#" className="pull-right">Forgot password?</a>
	                            </div>  
	                            <input type="submit" value="Login" className="btn btn-success btn-custom" />

	                        </form>
	                    </div>
	                    <div role="tabpanel" className="tab-pane fade" id="register">
	                        <form className="form-horizontal" method="post" action="">
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-user"></i></div>
	                                    <input type="text" name="register_username" className="form-control" placeholder="Username" required="required" value="" />
	                                </div>
	                            </div>
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-male"></i></div>
	                                    <input type="text" name="register_fullname" className="form-control" placeholder="Full name" required="required" value="" />
	                                </div>
	                            </div>
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-envelope"></i></div>
	                                    <input type="email" name="register_email" className="form-control" placeholder="Email" required="required" value="" />
	                                </div>
	                            </div>
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-lock"></i></div>
	                                    <input type="password" name="register_password" className="form-control" placeholder="Password" required="required" />
	                                </div>
	                            </div>
	                            <div className="form-group ">
	                                <div className="input-group">
	                                    <div className="input-group-addon"><i className="fa fa-lock"></i></div>
	                                    <input type="password" name="register_cpassword" className="form-control" placeholder="Confirm Password" required="required" />
	                                </div>
	                            </div>
	                            <input type="submit" value="Register" className="btn btn-success btn-custom" />
	                        </form>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
    </div>
		)
	}
});

module.exports = LoginRegister;