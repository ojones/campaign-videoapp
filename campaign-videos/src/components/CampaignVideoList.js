import React, { Component } from 'react'
import CampaignVideoCard from './CampaignVideoCard'
import { Link } from 'react-router-dom'
import { feathersClient } from '../feathersClient'

class CampaignVideoList extends Component {
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

    componentWillUnmount() {
        const campaigns = feathersClient.service('campaigns')

        campaigns.on('created', null)
    }

    render() {
        const { campaigns } = this.state
        return (
            <div className="card-columns">
                {
                    this.state.campaigns.map(campaign => {
                        const { name, description, id, videos } = campaign
                        return <CampaignVideoCard key={id} name={name} description={description} videos={videos} style={{margin: '20px'}}/>
                    })
                }
                
                <Link to='/add-campaign'>
                    <div className="btn btn-circle center-block">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="80" viewBox="0 0 24 24" width="80">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                        </svg>
                    </div>
                </Link>
            </div>
        )
    }
}

export default CampaignVideoList