import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DesktopBar from './DesktopBar';
import MobileBar from './MobileBar';
import { Router, Route, Switch } from 'react-router';
class Interface extends Component {
  render() {
    return (
      <div className="levlerapp">
        <DesktopBar />
        <MobileBar />
       
      </div>
    );
  }
}
export default Interface;