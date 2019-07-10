import React,{Component} from 'react';
import './core.css';
import './App.css';

import Navigation from './components/Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper fixed"> 
          <Navigation />
      </div>
    )
  }
}

export default App;
