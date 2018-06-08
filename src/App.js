import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuButton from "./components/MenuButton";
import Menu from "./components/Menu";

class App extends Component {

    state = {
        menuOpen: false
    }

    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen});
    }

    handleMenuClick = (event) => {
        event.stopPropagation();
        this.setState({menuOpen: !this.state.menuOpen});
    }
  render() {
    return (
          <div>
              <div>
                  <MenuButton onClick={this.toggleMenu}/>
                  <Menu onClick={this.handleMenuClick} menuOpen={this.state.menuOpen}/>
                  <p>Can you spot the item that doesn't belong?</p>
                  <ul>
                      <li>Lorem</li>
                      <li>Ipsum</li>
                      <li>Dolor</li>
                      <li>Sit</li>
                      <li>Bumblebees</li>
                      <li>Aenean</li>
                      <li>Consectetur</li>
                  </ul>
              </div>
          </div>
    );
  }
}

export default App;
