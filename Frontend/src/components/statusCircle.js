import React, { Component } from 'react';
import $ from "jquery";
import config from '../config'
import jquery from '../jquery'


export default class StatusCircle extends Component {  
  render() {
	  return (
    <div className="status-circle">
        <svg id="svg" width="600" height="600"  version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle id="bar" r="270" cx="300" cy="300" fill="transparent" strokeDasharray="1700" strokeDashoffset="1700"></circle>
          <circle  id="bar-background" r="270" cx="300" cy="300" fill="transparent" strokeDasharray="1700" strokeDashoffset="0"></circle>
        </svg>
    </div>
  )
}
}

