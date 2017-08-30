import React, { Component } from 'react'
import YouTube from 'react-youtube'
import { Link } from 'react-router-dom'

class CampaignVideoCard extends Component {
    render() {
        const opts = {
            width:'100%',
            playerVars: {
                autoplay: 1,
                mute: 1,
                controls: 0,
                showinfo: 0,
                modestbranding: 1,
                rel: 0,
                playsinline: 0,
            }
        }

        return (
            <div className="card" style={this.props.style}>
                <YouTube
                    className='card-img-top'
                    videoId='HkZDSqyE1do'
                    opts={opts}
                    onReady={this._onReady}
                />

                <div className="card-body">
                    <h4 className="card-title">{ this.props.name }</h4>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: this.props.description }}></p>
                    <div>
                        {/* <a className="btn btn-success" href={youtubeURLBase + this.props.videoId}>
                            Watch
                        </a> */}
                    </div>
                    <div className="form-group">
                        <Link to="#">
                            <div className="svg-icon svg-baseline">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </div>
                            Add video
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
    }
}

export default CampaignVideoCard