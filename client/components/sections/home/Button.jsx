import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Button.less';

export default class Button extends Component {
    render() {
    	const { chaosCaller } = this.props;
    	
        return (
            <div className='Undercover' onClick={chaosCaller}>
            	<div className='button' onClick={chaosCaller}>
                	Don`t click
                </div>
            </div>
        );
    }
}


