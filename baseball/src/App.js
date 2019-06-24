import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

class App extends React.Component {
 
  render() {

    return (
      <div className="App">
        
        <Dashboard />
        
      </div>
    );
  }
}

export default App;
