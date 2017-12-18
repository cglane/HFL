import {LandingPage} from './containers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Root = () => (
  <MuiThemeProvider>
  <Router>
    <div>
      <Route exact path="/" component={LandingPage}/>
      {/* <Route path="/profile" component={ProfilePage}/> */}
    </div>
  </Router>
  </MuiThemeProvider>
)


export default Root