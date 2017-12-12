import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Navigation.less';

export default class Navigation extends Component {
    scrollToElm(elm) {
        const { clientHeight } = document.documentElement;
        const resumePosition = (clientHeight * 1.5) / 2 + 1;
        const motLettPosition = ((clientHeight * 1.5) + document.getElementById('resume').offsetHeight) / 2;

        window.scrollTo(0, elm === 'resume' ? resumePosition : motLettPosition);
    }

    render() {
        return (
            <div className='Navigation'>
            	<div className='wrap'>
	                <div>What is here ?</div>
	                <p onClick={ this.scrollToElm.bind(this, 'resume') }>Resume</p>
	                <p onClick={ this.scrollToElm.bind(this, 'motLett') }>Mot lett</p>
            	</div>
            </div>
        );
    }
}


