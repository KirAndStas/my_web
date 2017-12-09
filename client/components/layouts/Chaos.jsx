import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Chaos.less';

export default class Chaos extends Component {
	state = {
		photoes: []
	}

	componentDidMount() {
		setInterval(this.addNewPhoto.bind(this), 50)
	}

	addNewPhoto() {
		const { photoes } = this.state;

		this.setState({
			photoes: [ ...photoes, {
				position: 'absolute',
				zIndex: photoes.length,
				left: Math.floor(Math.random()*100) + '%',
				top: Math.floor(Math.random()*100) + '%',
				width: Math.floor(Math.random()*40) + '%',
				transform: `rotate(${Math.floor(Math.random()*360)}deg)`
			}]
		})
	}

    render() {
    	const { photoes } = this.state;

        return (
            <div className='Chaos'>
            	{
            		photoes.map(photo => {
            			return (
	            			<img style={photo} src='/static/images/portrait.jpg' />
	            		)
            		})
            	}
            </div>
        );
    }
}


