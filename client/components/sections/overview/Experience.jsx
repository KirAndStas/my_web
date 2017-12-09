import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Experience.less';

export default class Experience extends Component {
    render() {
        return (
            <div className='Experience'>
                <div className='title'>Experiences</div>
                <div>&#123;</div>
                <p>1+: '',</p>
                <p>Multipage website: isomorphic,</p>
                <p>Admin: with KeysonteJS,</p>
                <p>Landing: isomorphic,</p>
                <p>RESTapi: for react-native app,</p>
                <p>PureJS desktop app: with electronJS</p>
                <div>}</div>
            </div>
        );
    }
}


