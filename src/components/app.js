import React, { Component } from 'react';
import { Link } from 'react-router';

import Navigation from './Navigation';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Navigation />
      	<div>
        {this.props.children}
        </div>
      </div>
    );
  }
}
