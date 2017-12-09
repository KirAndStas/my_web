import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Navigation.less';

export default class Navigation extends Component {
    render() {
        return (
            <div className='Navigation'>
            	<div className='wrap'>
	                <div>What is here ?</div>
	                <p>Resume</p>
	                <p>Mot letter</p>
            	</div>
            </div>
        );
    }
}


