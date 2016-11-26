import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//require('./style/style');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
      	<Route path="about" component={About} />
      	<Route path="contact" component={Contact} />

     		<IndexRoute component={Landing}/>
      </Route>      
    </Router>
  </Provider>
  , document.querySelector('.app'));
