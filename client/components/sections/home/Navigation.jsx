import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Navigation.less';

export default class Navigation extends Component {
    render() {
        return (
            <div className='Navigation'>
            	<div className='wrap'>
	                <div>What is here ?</div>
	                <p><a href='#resume' >Resume</a></p>
	                <p><a href='#motLetter' >Mot letter</a></p>
            	</div>
            </div>
        );
    }
}


