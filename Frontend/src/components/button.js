import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    width: '75px',
    height: '30px',
    padding: '7px',
    color: 'white',
    border: '1px solid',
    fontWeight: 'bold',
    fontSize: '.5em',
    margin: 'auto'
};

const DefaultButton = () => (
    <div className='default-button' style={style}> 
        <span>Explore</span>    
    </div>
);

export default DefaultButton;