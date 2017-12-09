import React, { Component } from 'react';
import PropTypes            from 'prop-types';

// import Background from './Background.jsx';
import Name from './Name.jsx';
import Navigation from './Navigation.jsx';
import About from './About.jsx';
import Button from './Button.jsx';
// import Lines from './Lines.jsx';

import './index.less';

export default class Home extends Component {
    render() {
        const { chaosCaller } = this.props;

        return (
                // <TypeWriter
                //     style={{
                //         position: 'absolute',
                //         top: '335px',
                //         color: 'white',
                //         fontFamily: 'Cutive_Mono',
                //         fontSize: '60px'
                //     }}
                //     phrase='Hello, Hola, Hej, Salut'
                //     velocity='110'
                // />
                // <Background />
            <div className='Home'>
                <div className='header'>
                    <Name />
                    <Navigation />
                </div>
                <Button chaosCaller={chaosCaller} />
                <About />
            </div>
                // <Lines />
        );
    }
}


