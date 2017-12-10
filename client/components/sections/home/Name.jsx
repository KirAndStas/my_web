import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import { url, appPort } from '../../../../etc/config.json';

import './Name.less';

export default class Name extends Component {
    render() {
        const selfLink = url + appPort;
        return (
            <div className='Name'>
            	<div><a href={selfLink}>Kiril S</a></div>
				<p>teen 20y.o.</p>
				<p>kind design fan</p>
				<p>new open</p>               
            </div>
        );
    }
}


