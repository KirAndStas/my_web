import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Lines.less';

export default class Lines extends Component {
    render() {
    	const { chaosCaller } = this.props;
    	
        return (
            <div className='Lines'>
                <div className='nameNav' />
                <div className='navSubnav' />
                <div className='navSubnavResume' />
                <div className='navSubnavLetter' />
            </div>
        );
    }
}


