import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import NewCampaign from './components/NewCampaign'
import CampaignVideoList from './components/CampaignVideoList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { feathersClient } from './feathersClient'
// import { Provider } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = { campaigns: [] }
    const campaigns = feathersClient.service('campaigns')

    campaigns.find().then(response => {
        const campaigns = response.data
        this.setState({ campaigns })
    })
    
    campaigns.on('created', campaign => {
        this.setState((prevState) => {
            let campaigns = prevState.campaigns.slice[0]
            campaigns.push(campaign)
            return { campaigns }
        })
    })
  }

  render() {
    const { campaigns } = this.state
    return (
      // <Provider>
        <Router>
          <div className="App">
            <div>
              <Switch>
                <Route exact path="/" render={() => <CampaignVideoList campaigns={campaigns} />} />
                <Route exact path="/add" component={NewCampaign} />
              </Switch>
            </div>
          </div>
        </Router>
      // </Provider>
    )
  }
}

export default App