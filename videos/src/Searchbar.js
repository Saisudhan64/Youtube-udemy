import React, { Component } from 'react'
import './Searchbar.css'
 class Searchbar extends Component {
    state={value:''}
    onsubmitform = (e) =>{
        e.preventDefault();

        this.props.onFormSubmit(this.state.value);
    }
  render() {
    return (
      <div>
          <form onSubmit={this.onsubmitform}>
              <label style={{position:'absolute',top:'5.6vw',left:'28.5vw'}}><b>Video search</b></label><br/>
              <input onChange={(e) =>{this.setState({value:e.target.value}) }} value={this.state.value} className="inputfield" type="text" />
          </form>
      </div>
    )
  }
}

export default Searchbar
