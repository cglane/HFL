import React from 'react';
import $ from "jquery";
import style from "../main.scss";
import config from '../config'
import jquery from '../jquery'
import { Video, StatusCircle, DefaultButton, DefaultHeader } from '../components'
import { map , addIndex} from 'ramda'
import { setTimeout } from 'timers';
const createReactClass = require('create-react-class');
let pageLoaded = false;


///Append Loading Page
const loadingPage = () => {
  $('body').append('<div class="overlay-wrapper overlay">Loading Page...</div>');
  $('body').append('<div class="overlay-wrapper overlay-top">Loading Page...</div>');
  $('body').append('<div class="overlay-wrapper overlay-bottom">Loading Page...</div>');
  //Animation
  $('.overlay-top').addClass('overlay-animation')
  $('.overlay-bottom').addClass('overlay-animation')
}
loadingPage();

// Check that first video has loaded
const videoLoaded = (index) => {
  if (index == 0) {
    setTimeout(() => {
      $('.overlay-wrapper').remove()
    }, 4000)
  }
}

const mapIndexed = addIndex(map);
const landingImages = mapIndexed((x, itr) => {
  const divStyle = {
    'zIndex': `-${itr}`
  }
  return (
    <div key={itr} style={divStyle} className={`video-${itr} video-wrapper`}>
      <div className="count-total"><span>/{config.landingPageOptions.length}</span></div>
      <div className='scroll-target'>
        <div className="counter"> <span>{itr} </span></div>
        <div className="text"><p>{x.description}</p></div>
        <div className="explore"> 
          <h5>{x.header2}</h5>
          <h3>{x.header1}</h3>
          <DefaultButton/>
        </div>
      </div>
      <Video key={itr} index={itr} url={x.video} videoLoaded={videoLoaded} playing={true} />
    </div>
  )
})(config.landingPageOptions)

const LandingPage = createReactClass({
  getInitialState () {
    return {
      playVideo: true,
      iteration : 0
    };
  },
  componentDidMount () {
    console.log('component did mount')
  },
  componentDidUpdate () {
    console.log('component did update')
  },
  showSelectedVideo() {
    // Use jquery to iterate through videos using
  },
  changeIter () {
    let iter = 0
    if (this.state.iteration < config.landingPageOptions.length){
      iter = this.state.iteration + 1
    } 
    this.setState({iteraton: iter})
    this.showSelectedVideo()
  },
  render() {
	  return (
    <div className="landing-page">
      <DefaultHeader />
      <StatusCircle/>
      {landingImages}
    </div> 
  )
}
})

export default LandingPage
