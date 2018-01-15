import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const styles = {
    core: { background: 'white',
             color: 'black !important',
             position: 'absolute',
             top: '0px',
             left: '0px',
             zIndex : 1000,
           },
     brand: {
        color: 'black',
        fontFamily : '"acumin-pro-extra-condensed", serif',
        letterSpacing: '.28em',
        textTransform:"uppercase",
        MozOsxFontSmoothing: 'grayscale',
        fontSize: '.6em',
        padding: '15px',
        opacity: '.6'
     },
     links: {
         color: 'black',
        fontFamily : '"acumin-pro-extra-condensed", serif',
        letterSpacing: '.28em',
        textTransform:"uppercase",
        '-moz-osx-font-smoothing': 'grayscale',
        fontSize: '.3em',
        margin: '10px',
        borderBottom: 'solid 1px black',
        opacity:'.5'
     }
}

const brand = () => {
    return (
        <div style= {styles.brand}>
            <span> HFL </span>
            <span> Associates </span>
        </div>
    )
}


/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class DefaultHeader extends Component {


  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
  const buttonStyle = {
    backgroundColor: 'transparent',
    color: 'black'
  };
  const rightButtons = (
    <div>
      <FlatButton label="Residential" style={styles.links} />
      <FlatButton label="Commercial" style={styles.links} />
      <FlatButton label="Land" style={styles.links} />
      <FlatButton label="Conservation" style={styles.links} />

      <FlatButton label="About" style={styles.links} />
    </div>
  );
    return (
        <AppBar
           style={styles.core}
          iconElementLeft={<span style={styles.brand}>Holcombe Fair & Lane</span>}
          iconElementRight={rightButtons}
        />
    );
  }
}

export default DefaultHeader;