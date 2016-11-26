import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Landing from './components/Landing';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

//require('./style/style');

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}> 
      <IndexRoute component={Landing}/>
      </Route>      
    </Router>
  </Provider>
  , document.querySelector('.container'));
