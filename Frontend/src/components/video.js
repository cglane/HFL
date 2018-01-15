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
    loop: true
  }
  ready = (e) =>{
    this.setState({ played: 500 }) 
    this.props.videoLoaded(this.props.index)
  }
  render () {
    return (
    <ReactPlayer 
        width='1900px'
         height='1000px'
         onReady={this.ready}
        {...this.state}
         />
    )
  }
}
