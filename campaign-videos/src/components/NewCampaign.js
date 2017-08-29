import React, { Component } from 'react'
import Script from 'react-load-script'

class NewCampaign extends Component {
    shouldComponentUpdate() {
        return false
    }

    clipChampScriptLoaded(loadState) {
        // For more customization options refer to our Documentation.
        var options = {
            output: "youtube"
        };
        window.clipchamp(this.refs.clipchamp, options);
        console.log(loadState)
    }

    render() {
        return(
            <div>
                <div id="clipchamp-button" ref="clipchamp" />
                <Script url="https://api.clipchamp.com/lDkDdX68iU5aag01vqvjdpgGxJU/button.js" onLoad={this.clipChampScriptLoaded.bind(this, 'success')}/>
            </div>
        )
    }
}

export default NewCampaign