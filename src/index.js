import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

//require('./style/style');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
      	<Route path="about" component={About} />
      	<Route path="contact" component={Contact} />
  			<Route path="signin" component={Signin} />
  			<Route path="signup" component={Signup} />
     		<IndexRoute component={Landing}/>
      </Route>      
    </Router>
  </Provider>
  , document.querySelector('.app'));
