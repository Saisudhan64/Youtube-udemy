import React, { Component } from 'react'
import './Videolist.css'
 class Videoitem extends Component {
  render() {
    return (
      <div>
      <div onClick={() => this.props.onVideoSelect(this.props.video)} className="item">
          <img alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url}/>
          <span style={{verticalAlign:'top',fontWeight:'bold',paddingLeft:'1vw'}}>{this.props.video.snippet.title}</span>
          
      </div>
        <br/>
      </div>
    )
  }
}

export default Videoitem
