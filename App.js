import React, { Component } from 'react';
import MobileBar from './components/MobileBar';
import DesktopBar from './components/DesktopBar';
import './css/app.css';
class App extends Component {
  render() {
    return (
      <div className="levler-app">
        <MobileBar />
        <DesktopBar />
      </div>
    );
  }
}

export default App;
