import React, { Component } from 'react';

import { contacts } from '../../../../etc/data.js';
import './index.less';

export default class Contacts extends Component {
    state = {
        opacity: 0
    }

    componentWillMount() {
        document.addEventListener('scroll', this.setOpacity.bind(this));
    }

    componentDidMount() {
        document.removeEventListener('scroll', this.setOpacity.bind(this));
    }

    setOpacity() {
        const { scrollTop } = document.documentElement;

        this.setState({
            opacity: this.calcOpacity(scrollTop)
        })
    }

    calcOpacity(scrollTop) {
        return scrollTop / 160
    }

    render() {
        const { opacity } = this.state;
        return (
            <div style={{ opacity }} className='Contacts'>
                    {
                        contacts.map(contact => {
                            const link = `/static/images/${contact.name}.svg`;

                            return (
                                <a key={contact.name} href={contact.link}  target='_blank'><img src={link} /></a>
                            );
                        })
                    } 
                <div className='socialCover' />
            </div>
        );
    }
}
