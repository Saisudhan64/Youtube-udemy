import React, { Component } from 'react'
import './Videolist.css'
 class Videodetail extends Component {
    
    
    
    render() {
        
    if(!this.props.svideo){
        return <div> <span style={{marginLeft:'23.7VW'}}><b></b></span><br/><br/></div>
    }
    var name = `https://www.youtube.com/embed/${this.props.svideo.id.videoId}`
    return (
        <div>
            <div className="player">
                <iframe title="video player" className="i" src={name}/>
            </div>  <br/>
      <div className="videodetail">
          <span><b>{this.props.svideo.snippet.title}</b><br/></span><br/>
          <span>{this.props.svideo.snippet.description}<br/><br/></span>  
      </div><br/>
      </div>
    )
  }
}

export default Videodetail
