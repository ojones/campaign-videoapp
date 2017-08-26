import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { socket, feathersClient } from './feathersClient'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { campaigns: [] };
    const campaigns = feathersClient.service('campaigns');
    campaigns.find().then( campaignsResonse => {
      const campaigns = campaignsResonse.data;
      this.setState({campaigns});
      console.log(this.state.campaigns)
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          There are {this.state.campaigns.length} campaigns so far :)
        </div>
      </div>
    );
  }
}

export default App;
