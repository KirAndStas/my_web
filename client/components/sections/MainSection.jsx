import React, { Component } from 'react';

import Overview from './overview/index.jsx';
import Letter from './letter/index.jsx';
import Contacts from './contacts/index.jsx';

import './MainSection.less';

export default class MainSecion extends Component {
    render() {
        return (
            <div className='MainSection'>
            	<Overview id='resume'/>	
            	<Letter id='motLetter'/>
            	<Contacts />
            </div>
        );
    }
}
