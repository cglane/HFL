import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
export default class Video extends Component {
  state = {
    url: this.props.url,
    playing: this.props.playing,
    volume: 0.0,
    muted: true,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false
  }
  ready = (e) =>{
    this.setState({ played: 500 }) 
  }
  render () {
    return (
    <ReactPlayer 
        width='1500px'
         height='800px'
         onReady={this.ready}
        {...this.state}
         />
    )
  }
}
