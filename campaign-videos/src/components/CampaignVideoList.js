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
                    <button type="button" className="btn btn-circle btn-success">
                        <div className="center-block">
                            <svg className="svgIcon" width="48px" height="48px" viewBox="0 0 48 48">
                                <path d="M38 26H26v12h-4V26H10v-4h12V10h4v12h12v4z" fill="white" />
                            </svg>
                        </div>
                    </button>
                </Link>
            </div>
        )
    }
}

export default CampaignVideoList