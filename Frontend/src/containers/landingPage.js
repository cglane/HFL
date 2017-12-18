import React from 'react';
import $ from "jquery";
import style from "../main.scss";
import config from '../config'
import jquery from '../jquery'
import { Video, StatusCircle, DefaultButton } from '../components'
import { map , addIndex} from 'ramda'
var createReactClass = require('create-react-class');

var mapIndexed = addIndex(map);
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
      <Video key={itr} url={x.video} playing={true} />
    </div>
  )
})(config.landingPageOptions)

const LandingPage = createReactClass({
  getInitialState () {
    return {
      playVideo: false,
      iteration : 0
    };
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
      <StatusCircle/>
      {landingImages}
    </div> 
  )
}
})

export default LandingPage
