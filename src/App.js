import React, {Component} from 'react';
import logo from './images/logo-pet.png';
import './App.css';
import Navbar from "./components/navbar";


class App extends Component {
  render() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <h1>Pet Shop</h1>
        <p>Welcome to the Pet Shop</p>
        <Navbar />
    </div>
  );
  }
}

export default App;
