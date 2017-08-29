import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { feathersClient } from './feathersClient';
import { campaignNames } from './test/campaignNames.js';
import { veggieDescriptions } from './test/veggieDescriptions.js';
import { youtubeVideos } from './test/youtubeVideos.js';
import NewCampaign from './components/NewCampaign'
import CampaignVideoList from './components/CampaignVideoList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { campaigns: [] };
    // // this how you setup a client connection to server
    // const campaigns = feathersClient.service('campaigns');
    // campaigns.find().then( response => {
    //   const campaigns = response.data;
    //   this.setState({campaigns});
    // });
    // // this is how code listens to server changes via websocket
    // campaigns.on('created', campaign => {
    //   this.setState({ campaigns: this.state.campaigns.concat([campaign])})
    //   // just to show it works log list campaign objects after adding one
    //   console.log(this.state.campaigns)
    // });
  }

  // this creates a new fake campaign object on server
  addTestCampaign() {
    // here we just call one method on client service instead of assigning it to "campaigns" const
    // these values are all retreived from test files
    feathersClient.service('campaigns').create({
      name: campaignNames[Math.floor(Math.random() * campaignNames.length)],
      description: veggieDescriptions[Math.floor(Math.random() * veggieDescriptions.length)],
      vidoes: [
        youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)],
        youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)],
        youtubeVideos[Math.floor(Math.random() * youtubeVideos.length)]
      ]
    })
  }
  
  // this uses the feathers remove method with null parameters, which means delete all
  deleteAll() {
    feathersClient.service('campaigns').remove().then(() => {
      // this.setState({ campaigns: [] })
    });
  }

  handleAddCampaign(e) {
    this.addTestCampaign();
    e.preventDefault();
  }

  handleDeleteAll(e) {
    this.deleteAll();
    e.preventDefault();
  }

  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Look at App.js to see how to connect to server to read, write, and delete.
        </p> */}
        <CampaignVideoList />
        {/* <div>
          There are {this.state.campaigns.length} campaigns so far :)
        </div>
        <div>
          <button onClick={this.handleAddCampaign.bind(this)}>Add campaign</button>
          <button onClick={this.handleDeleteAll.bind(this)}>Delete all</button>
        </div>
        <div>
          <ul>
            {this.state.campaigns.map(function(listValue){
              return <li>{listValue.name}</li>;
            })}
          </ul>
        </div> */}
      </div>
    );
  }
}

export default App;
