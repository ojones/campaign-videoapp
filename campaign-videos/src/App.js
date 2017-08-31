import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import NewCampaign from './components/NewCampaign'
import CampaignVideoList from './components/CampaignVideoList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { Provider } from 'react-redux'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { campaigns: [] }
  }

  render() {
    return (
      // <Provider>
        <Router>
          <div className="App">
            <div>
              <Switch>
                <Route exact path="/" component={CampaignVideoList} />
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