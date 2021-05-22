import React, { Component } from 'react'
import './Videolist.css'
import Videoitem from './Videoitem'
 class Videolist extends Component {
  render() {
    const renderedlist = this.props.videos.map((video) => {
        return <Videoitem key={video.id.videoId} onVideoSelect={this.props.onVideoSelect} video={video}/>
    })

    return (
      <div className="list">
        {renderedlist}
      </div>
    )
  }
}

export default Videolist
