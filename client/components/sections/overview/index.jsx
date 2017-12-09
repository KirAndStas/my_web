import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import Tech from './Tech.jsx';
import Experience from './Experience.jsx';
import Algorithm from './Algorithm.jsx';

import './Overview.less';

export default class Overview extends Component {
    render() {
        return (
            <div className='Overview'>
            	<Tech />
            	<Experience />
            	<Algorithm />
            </div>
        );
    }
}


