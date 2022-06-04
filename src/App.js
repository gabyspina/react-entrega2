import React, {Component} from 'react';
import logo from './images/logo-pet-modified.ico';
import './App.css';
import Navbar from "./components/navbar";


class App extends Component {
  render() {
  return (
    <div className="App">
      <section className='App-section'>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>
          <h1>Pet Shop</h1>
          <p className='subtitle' >Welcome to the Pet Shop</p>
        </div>
      </section>
        <Navbar />
    </div>
  );
  }
}

export default App;
