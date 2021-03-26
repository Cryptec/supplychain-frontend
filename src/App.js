import React, { Component } from 'react';

import './App.css';
import './css/colors.css'
import './css/navigation.css'
import Navigation from './components/navigation';

class App extends Component {

  render() {


    return (
      <div className="App">
        <div>
         <Navigation />
        </div>
      </div>
    )
}
}
export default App;
