import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Parallax.less';
import Chaos from './Chaos.jsx';
import Background  from './Background.jsx';

import MainSection from '../sections/MainSection.jsx';
import Home  from '../sections/home/index.jsx';

export default class Parallax extends Component {
    state = {
        foregroundTop: '0px'
    }

    componentWillMount() {
        document.addEventListener('scroll', this.parallax.bind(this));
    }

    parallax() {
        const newTop = 0 - document.documentElement.scrollTop;

        this.setState({ foregroundTop: newTop });
    }

    render() {
        const { foregroundTop } = this.state;
        const { chaosCaller } = this.props;

        return (
            <div className='Parallax'>
                   <div className='background'>
                        <Home chaosCaller={chaosCaller}/>
                        <Background />
                    </div>

                    <div style={{ top: foregroundTop }} className='foreground'>
                        <MainSection />
                    </div>
            </div>
        );
    }
}


