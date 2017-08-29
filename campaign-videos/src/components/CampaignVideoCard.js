import React, { Component } from 'react'
import YouTube from 'react-youtube'

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
                    videoId='HkZDSqyE1do'       // defaults -> nullThere are 2 campaigns so far :)
                    opts={opts}                        // defaults -> {}
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
                    <a href="#" className="btn btn-primary">Add Video</a>
                </div>
            </div>
        )
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
    }
}

export default CampaignVideoCard