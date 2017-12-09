import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Tech.less';

export default class Tech extends Component {
    render() {
        return (
            <div className='Tech'>
                <div className='title'>Technologies</div>
                <div>[</div>
                <p>React,</p>
                <p>NodeJS,</p>
                <p>Redux||MobX,</p>
                <p>MongoDB,</p>
                <p>PostgreQL,</p>
                <p>Ansible,</p>
                <div>]</div>
            </div>
        );
    }
}


