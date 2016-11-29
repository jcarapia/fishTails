import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';

import App from './components/app';
import Landing from './components/Landing';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import AddTale from './components/AddTale';
import ShowTale from './components/ShowTale';
import TaleShow from './components/TaleShow';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk, reduxPromise)(createStore);

//require('./style/style');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
      	<Route path="gallery" component={Gallery} />
      	<Route path="about" component={About} />
      	<Route path="contact" component={Contact} />
      	<Route path="addTale" component={AddTale} />
  			<Route path="signin" component={Signin} />
  			<Route path="signup" component={Signup} />
  			<Route path="ShowTale" component={ShowTale} />
  			<Route path="gallery/:id" component={TaleShow} />
     		<IndexRoute component={Landing}/>
      </Route>      
    </Router>
  </Provider>
  , document.querySelector('.app'));
