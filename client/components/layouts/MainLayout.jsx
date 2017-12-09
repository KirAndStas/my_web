import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import Chaos from './Chaos.jsx';
import Parallax from './Parallax.jsx';

import './MainLayout.less';

export default class MainLayout extends Component {
    static propTypes = {
        location : PropTypes.object.isRequired
    }

    state = {
        chaos: false
    }

    chaosCaller(e) {
        e.preventDefault();
        this.setState({
            chaos: true
        });
    }

    render() {
        this.chaosCaller = this.chaosCaller.bind(this);
        const { chaos } = this.state;

        if (chaos) {
            document.body.style.overflow = 'hidden';
        }

        return (
            <div className='MainLayout'>
                { chaos ? <Chaos /> : <Parallax chaosCaller={this.chaosCaller} /> }
            </div>
        );
    }
}


