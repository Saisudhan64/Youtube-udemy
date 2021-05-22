import React, { Component } from 'react'
import './App.css'
import Searchbar from './Searchbar'
import youtube from './youtube'
import Videolist from './Videolist.js'
import Videodetail from './Videodetail.js'

export class App extends Component {
  state={videos:[],SelectedVideo:null}

onTermsubmit = async (value) =>{
  const response = await youtube.get('/search',{
    params:{
      q:value
    }
  })
  this.setState({
    videos:response.data.items,
    SelectedVideo:response.data.items[0]
  });
}

onVideoSelect = (video) =>{

    this.setState({SelectedVideo:video})
}

componentDidMount(){
  this.onTermsubmit('Cars');
}
  render() {
    return (
      <div>
          <Searchbar onFormSubmit={this.onTermsubmit}/>
          <div className="griddisplay">
          <Videodetail svideo={this.state.SelectedVideo}/>
          <Videolist onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
          </div>
      </div>
    )
  }
}

export default App
